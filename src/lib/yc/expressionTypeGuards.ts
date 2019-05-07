import {
  CallExpression,
  ExecutableCallRegular,
  Expression,
  FunctionExpression,
  VariableExpression,
  ShorthandFunctionExpression,
  ExecutableCallShorthand,
  ExecutableCall
} from 'src/types/yc/ExpressionTypes'

export function isVariable<V extends VariableExpression = VariableExpression>(
  expression: Expression
): expression is V {
  return expression.type === 'variable'
}

export function isCall<E extends CallExpression = CallExpression>(
  expression: Expression
): expression is E {
  return expression.type === 'call'
}

export function isFunction<E extends FunctionExpression = FunctionExpression>(
  expression: Expression
): expression is E {
  return expression.type === 'function'
}

export function isShorthandFunction<
  E extends ShorthandFunctionExpression = ShorthandFunctionExpression
>(expression: Expression): expression is E {
  return expression.type === 'shorthandFunction'
}

export function isExecutableCall<E extends ExecutableCall>(
  expression: CallExpression
): expression is E {
  return isFunction(expression.func) || isShorthandFunction(expression.func)
}

export function isExecutableCallRegular<E extends ExecutableCallRegular>(
  expression: CallExpression
): expression is E {
  return isFunction(expression.func)
}

export function isExecutableCallShorthand<E extends ExecutableCallShorthand>(
  expression: CallExpression
): expression is E {
  return isShorthandFunction(expression.func)
}
