import produce, { DraftObject } from 'immer'
import cloneDeep from 'lodash/cloneDeep'
import alphaConvert from 'src/lib/yc/alphaConvert'
import betaReduce from 'src/lib/yc/betaReduce'
import betaReducePreviewBefore from 'src/lib/yc/betaReducePreviewBefore'
import clearJustAlphaConvertedAndBetaReducePreview from 'src/lib/yc/clearJustAlphaConvertedAndBetaReducePreview'
import conflictingVariableNames from 'src/lib/yc/conflictingVariableNames'
import findNextCallExpressionAndParent from 'src/lib/yc/findNextCallExpressionAndParent'
import prioritizeExpressionContainer, {
  populatePriorityAggsAndPrioritizeExpression
} from 'src/lib/yc/prioritizeExpressionContainer'
import resetExpressionContainer, {
  resetExpression
} from 'src/lib/yc/resetExpressionContainer'
import { ImmediatelyExecutableCallExpression } from 'src/types/yc/ExecutableExpressionTypes'
import {
  isNeedsResetExpressionContainer,
  NeedsResetExpressionContainer,
  PrioritizedExpressionContainer,
  SteppedExpressionContainer
} from 'src/types/yc/ExpressionContainerTypes'
import {
  PrioritizedCallExpression,
  PrioritizedExpression,
  PrioritizedFunctionExpression
} from 'src/types/yc/PrioritizedExpressionTypes'

// NOTE: Use union of NeedsResetExpressionContainer | PrioritizedExpressionContainer
// instead of overloading like:
// NeedsResetExpressionContainer -> PrioritizedExpressionContainer
// PrioritizedExpressionContainer -> ...
// Why? If it uses overloading, then you can't pass a variable
// that has the type NeedsResetExpressionContainer | PrioritizedExpressionContainer
// because the return type will be uncertain (because of overloading, return type
// will be different depending on NeedsResetExpressionContainer or PrioritizedExpressionContainer)
// but TypeScript isn't smart enough to combine the potential return types.
// To avoid this the caller can use type guards to "separate" the union type
// before calling, but that adds unnecessary code to the caller.
export default function stepExpressionContainer(
  e: NeedsResetExpressionContainer | PrioritizedExpressionContainer
): SteppedExpressionContainer {
  if (isNeedsResetExpressionContainer(e)) {
    const newContainer = prioritizeExpressionContainer(
      resetExpressionContainer(e)
    )
    const nextCallExpressionAndParent = findNextCallExpressionAndParent(
      newContainer.expression
    )
    if (
      'notFound' in nextCallExpressionAndParent &&
      nextCallExpressionAndParent.notFound
    ) {
      return {
        ...newContainer,
        containerState: 'done'
      }
    } else {
      return newContainer
    }
  } else {
    return produce<SteppedExpressionContainer>(e, draftContainer => {
      const nextCallExpressionAndParent = findNextCallExpressionAndParent<
        DraftObject<PrioritizedCallExpression>,
        DraftObject<ImmediatelyExecutableCallExpression>,
        DraftObject<PrioritizedFunctionExpression>
      >(draftContainer.backupExpression || draftContainer.expression)
      if (
        'notFound' in nextCallExpressionAndParent &&
        nextCallExpressionAndParent.notFound
      ) {
        throw new Error()
      } else {
        const expression = nextCallExpressionAndParent.expression
        switch (expression.state) {
          case 'default': {
            expression.state = 'readyToHighlight'
            draftContainer.previouslyChangedExpressionState = 'readyToHighlight'
            break
          }
          case 'readyToHighlight': {
            if (expression.func.body.state === 'default') {
              expression.func.body.state = 'justHighlighted'
              draftContainer.previouslyChangedExpressionState =
                'funcBodyJustHighlighted'
            } else if (expression.func.arg.state === 'default') {
              expression.func.body.state = 'highlighted'
              expression.func.arg.state = 'justHighlighted'
              draftContainer.previouslyChangedExpressionState =
                'funcArgJustHighlighted'
            } else if (expression.arg.state === 'default') {
              expression.func.arg.state = 'highlighted'
              expression.arg.state = 'justHighlighted'
              draftContainer.previouslyChangedExpressionState =
                'callArgJustHighlighted'
            } else {
              expression.arg.state = 'highlighted'
              const conflicts = conflictingVariableNames(expression)
              if (conflicts.length > 0) {
                expression.state = 'needsAlphaConvert'
                draftContainer.conflictingVariableNames = conflicts
                draftContainer.previouslyChangedExpressionState =
                  'needsAlphaConvert'
              } else {
                expression.state = 'readyToBetaReduce'
                draftContainer.previouslyChangedExpressionState =
                  'readyToBetaReduce'
              }
            }
            break
          }
          case 'needsAlphaConvert': {
            const alphaConvertResult = alphaConvert(expression)
            expression.func = alphaConvertResult.func
            expression.arg = alphaConvertResult.arg
            expression.state = 'alphaConvertDone'
            draftContainer.conflictingVariableNames = []
            draftContainer.previouslyChangedExpressionState = 'alphaConvertDone'
            break
          }
          case 'readyToBetaReduce':
          case 'alphaConvertDone': {
            const betaReducePreviewBeforeResult = betaReducePreviewBefore(
              clearJustAlphaConvertedAndBetaReducePreview(expression)
            )
            expression.func = betaReducePreviewBeforeResult.func
            expression.arg = betaReducePreviewBeforeResult.arg
            expression.state = 'betaReducePreviewBefore'
            draftContainer.previouslyChangedExpressionState =
              'betaReducePreviewBefore'
            break
          }
          case 'betaReducePreviewBefore': {
            expression.state = 'betaReducePreviewAfter'
            draftContainer.backupExpression = cloneDeep(
              draftContainer.expression
            )
            const betaReducedFunctionBody: PrioritizedExpression = populatePriorityAggsAndPrioritizeExpression(
              resetExpression(
                betaReduce(
                  clearJustAlphaConvertedAndBetaReducePreview(expression)
                )
              )
            )
            expression.func.body = betaReducedFunctionBody
            draftContainer.previouslyChangedExpressionState =
              'betaReducePreviewAfter'
            break
          }
          case 'betaReducePreviewAfter': {
            const betaReduced: PrioritizedExpression = {
              ...betaReduce(
                clearJustAlphaConvertedAndBetaReducePreview(expression)
              ),
              state: 'justBetaReduced'
            }
            if (
              'noParent' in nextCallExpressionAndParent &&
              nextCallExpressionAndParent.noParent
            ) {
              return {
                ...e,
                expression: betaReduced,
                backupExpression: undefined,
                containerState: 'needsReset',
                previouslyChangedExpressionState: 'justBetaReduced'
              }
            } else if (
              'parentCallExpression' in nextCallExpressionAndParent &&
              nextCallExpressionAndParent.parentCallExpression
            ) {
              nextCallExpressionAndParent.parentCallExpression[
                nextCallExpressionAndParent.parentKey
              ] = betaReduced
              draftContainer.containerState = 'needsReset'
            } else if (
              'parentFunctionExpression' in nextCallExpressionAndParent &&
              nextCallExpressionAndParent.parentFunctionExpression
            ) {
              nextCallExpressionAndParent.parentFunctionExpression.body = betaReduced
              draftContainer.containerState = 'needsReset'
            }
            draftContainer.previouslyChangedExpressionState = 'justBetaReduced'
            delete draftContainer.backupExpression
            break
          }
        }
      }
    })
  }
}
