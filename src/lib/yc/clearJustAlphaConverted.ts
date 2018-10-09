import { ImmediatelyExecutableCallExpression } from 'src/types/yc/ExecutableExpressionTypes'

import {
  isPrioritizedCallExpression,
  isPrioritizedFunctionExpression,
  isPrioritizedVariableExpression,
  PrioritizedExpression
} from 'src/types/yc/PrioritizedExpressionTypes'

function helper<E extends PrioritizedExpression>(expression: E): E {
  if (isPrioritizedVariableExpression(expression)) {
    if (expression.justAlphaConverted) {
      // See: https://github.com/Microsoft/TypeScript/pull/13288#issuecomment-367396818
      return Object.assign({}, expression, { justAlphaConverted: false })
    } else {
      return expression
    }
  } else if (isPrioritizedCallExpression(expression)) {
    return Object.assign({}, expression, {
      arg: helper(expression.arg),
      func: helper(expression.func)
    })
  } else if (isPrioritizedFunctionExpression(expression)) {
    return Object.assign({}, expression, {
      arg: helper(expression.arg),
      body: helper(expression.body)
    })
  }
}

export default function clearJustAlphaConverted(
  expression: ImmediatelyExecutableCallExpression
): ImmediatelyExecutableCallExpression {
  return helper(expression)
}
