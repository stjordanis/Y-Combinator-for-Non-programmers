import populatePriorityAggsAndPrioritizeExpression from 'src/lib/yc/populatePriorityAggsAndPrioritizeExpression'
import {
  NeedsPrioritizeExpressionContainer,
  PrioritizedExpressionContainer
} from 'src/types/yc/ExpressionContainerTypes'
import {
  CallExpression,
  Expression,
  FunctionExpression,
  VariableExpression
} from 'src/types/yc/ExpressionTypes'
import {
  PrioritizedCallExpression,
  PrioritizedExpression,
  PrioritizedFunctionExpression,
  PrioritizedVariableExpression
} from 'src/types/yc/PrioritizedExpressionTypes'

export default function prioritizeExpressionContainer(
  expressionContainer: NeedsPrioritizeExpressionContainer<VariableExpression>
): PrioritizedExpressionContainer<PrioritizedVariableExpression>
export default function prioritizeExpressionContainer(
  expressionContainer: NeedsPrioritizeExpressionContainer<CallExpression>
): PrioritizedExpressionContainer<PrioritizedCallExpression>
export default function prioritizeExpressionContainer(
  expressionContainer: NeedsPrioritizeExpressionContainer<FunctionExpression>
): PrioritizedExpressionContainer<PrioritizedFunctionExpression>
export default function prioritizeExpressionContainer(
  expressionContainer: NeedsPrioritizeExpressionContainer<Expression>
): PrioritizedExpressionContainer<PrioritizedExpression>
export default function prioritizeExpressionContainer(
  expressionContainer: NeedsPrioritizeExpressionContainer<Expression>
) {
  return {
    containerState: 'prioritized',
    previouslyChangedExpressionState: 'default',
    expression: populatePriorityAggsAndPrioritizeExpression(
      expressionContainer.expression
    )
  }
}
