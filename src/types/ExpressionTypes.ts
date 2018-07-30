export interface VariableExpression {
  state: 'default' | 'highlighted' | 'needsReset'
  type: 'variable'
  value: string
}

export function isVariableExpression(
  expression: Expression
): expression is VariableExpression {
  return expression.type === 'variable'
}

export interface CallExpression {
  state:
    | 'default'
    | 'readyToHighlight'
    | 'highlighted'
    | 'done'
    | 'checkForConflictingVariables'
    | 'needsAlphaConvert'
    | 'readyToBetaReduce'
    | 'needsReset'
  type: 'call'
  arg: Expression
  func: Expression
}

export function isCallExpression(
  expression: Expression
): expression is CallExpression {
  return expression.type === 'call'
}

export interface FunctionExpression {
  type: 'function'
  state: 'default' | 'highlighted' | 'needsReset'
  arg: VariableExpression
  body: Expression
}

export function isFunctionExpression(
  expression: Expression
): expression is FunctionExpression {
  return expression.type === 'function'
}

export type Expression =
  | VariableExpression
  | CallExpression
  | FunctionExpression

interface NeedsResetState {
  state: 'needsReset'
}
export type NeedsResetFunctionExpression = FunctionExpression & NeedsResetState
export type NeedsResetCallExpression = CallExpression & NeedsResetState
export type NeedsResetVariableExpression = VariableExpression & NeedsResetState

export type NeedsResetExpression =
  | NeedsResetFunctionExpression
  | NeedsResetCallExpression
  | NeedsResetVariableExpression
