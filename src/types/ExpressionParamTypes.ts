import { VariableNames } from 'src/types/VariableNames'
import {
  VariableShorthandBinary,
  VariableShorthandUnary,
  VariableShorthandNumber,
  VariableShorthandFunc,
  ConditionalExpression,
  FunctionExpression
} from 'src/types/ExpressionTypes'

export interface HighlightedVariableExpressionParams {
  readonly name: VariableNames
  readonly highlighted: true
}

export interface QuestionPlusOrMinusOneParams {
  readonly shorthandNumberPlusOrMinusOne: NonNullable<
    VariableShorthandNumber['shorthandNumberPlusOrMinusOne']
  >
}

export interface QuestionShorthandNumberAfterConvertParams {
  readonly shorthandNumberAfterConvert: NonNullable<
    VariableShorthandNumber['shorthandNumberAfterConvert']
  >
  readonly initialHighlight?: boolean
}

export interface VariableShorthandBinaryParams {
  readonly shorthandBinary: VariableShorthandBinary['shorthandBinary']
  readonly initialHighlight?: boolean
}

export interface VariableShorthandFuncParams {
  readonly shorthandFunc: VariableShorthandFunc['shorthandFunc']
  readonly initialHighlight?: boolean
}

export interface VariableShorthandNumberParams {
  readonly shorthandNumber: VariableShorthandNumber['shorthandNumber']
  readonly initialHighlight?: boolean
  readonly shorthandUnary?: VariableShorthandUnary['shorthandUnary']
  readonly shorthandNumberAfterConvert?: VariableShorthandNumber['shorthandNumberAfterConvert']
}

export interface VariableShorthandUnaryParams {
  readonly name: VariableNames
  readonly initialHighlight?: boolean
  readonly shorthandUnary: VariableShorthandUnary['shorthandUnary']
}

export type VariableExpressionParams = VariableNames

export interface FunctionExpressionParams {
  readonly arg: VariableExpressionParams | HighlightedVariableExpressionParams
  readonly body: ExpressionParams
  readonly meta?: FunctionExpression['meta']
}
// https://github.com/Microsoft/TypeScript/issues/3496#issuecomment-128553540
export interface CallExpressionParams extends ReadonlyArray<ExpressionParams> {}

export interface ConditionalExpressionParams {
  readonly condition: ExpressionParams
  readonly trueCase: ExpressionParams
  readonly falseCase: ExpressionParams
  readonly checkType: ConditionalExpression['checkType']
}

export interface RepeatExpressionParams {
  readonly child: ExpressionParams
  readonly count?: number
  readonly countVariable?: VariableNames
}

export type ExpressionParams =
  | VariableExpressionParams
  | FunctionExpressionParams
  | CallExpressionParams
  | HighlightedVariableExpressionParams
  | VariableShorthandBinaryParams
  | VariableShorthandNumberParams
  | VariableShorthandUnaryParams
  | ConditionalExpressionParams
  | RepeatExpressionParams
  | VariableShorthandFuncParams
  | QuestionPlusOrMinusOneParams
  | QuestionShorthandNumberAfterConvertParams
