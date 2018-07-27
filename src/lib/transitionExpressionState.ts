import produce from 'immer'
import {
  betaReduce,
  conflictingVariableNames,
  findNextCallExpressionAndParent,
  mutableAlphaConvert,
  prioritizeExpression
} from 'src/lib/expressionUtils'
import {
  DecoratedCallExecutableExpression,
  DecoratedCallPrioritizedExpression,
  DecoratedCallUnexecutableExpression,
  DecoratedCallUnprioritizedExpression,
  DecoratedExpression
} from 'src/types/DecoratedExpressionTypes'

export default function transitionExpressionState(
  expression: DecoratedCallUnprioritizedExpression
): DecoratedCallPrioritizedExpression
export default function transitionExpressionState(
  expression: DecoratedCallPrioritizedExpression
): DecoratedCallExecutableExpression | DecoratedCallUnexecutableExpression
export default function transitionExpressionState(expression: any): any {
  if (!expression.priority) {
    return prioritizeExpression(expression)
  } else {
    return produce<DecoratedExpression>(expression, draftExpression => {
      const nextCallExpressionAndParent = findNextCallExpressionAndParent(
        draftExpression
      )
      if (nextCallExpressionAndParent) {
        const {
          expression: nextCallExpression,
          parent,
          parentKey,
        } = nextCallExpressionAndParent
        switch (nextCallExpression.state) {
          case 'default': {
            nextCallExpression.state = 'readyToHighlight'
            return
          }
          case 'readyToHighlight': {
            if (nextCallExpression.value.func.value.arg.state === 'default') {
              nextCallExpression.value.func.value.arg.state = 'highlighted'
            } else if (nextCallExpression.value.arg.state === 'default') {
              nextCallExpression.value.arg.state = 'highlighted'
            } else if (
              nextCallExpression.value.func.value.body.state === 'default'
            ) {
              nextCallExpression.value.func.value.body.state = 'highlighted'
            } else {
              nextCallExpression.state = 'checkForConflictingVariables'
            }
            return
          }
          case 'checkForConflictingVariables': {
            const conflicts = conflictingVariableNames(nextCallExpression)
            if (conflicts.length > 0) {
              nextCallExpression.state = 'needsAlphaConvert'
            } else {
              nextCallExpression.state = 'readyToBetaReduce'
            }
            return
          }
          case 'needsAlphaConvert': {
            mutableAlphaConvert(nextCallExpression)
            nextCallExpression.state = 'readyToBetaReduce'
            return
          }
          case 'readyToBetaReduce': {
            const betaReduced = betaReduce(nextCallExpression)
            if (parent) {
              parent[parentKey] = betaReduced
            } else {
              return parent
            }
          }
        }
      } else {
        draftExpression.state = 'done'
      }
    })
  }
}
