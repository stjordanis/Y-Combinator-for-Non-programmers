import {
  isFunction,
  isVariable,
  isExecutableCallRegular,
  isCall,
  isExecutableCallBinary,
  isConditional
} from 'src/lib/expressionTypeGuards'
import {
  CallExpression,
  ExecutableStepCallRegular,
  Expression,
  ExecutableCallRegular,
  FunctionExpression,
  NonExecutableStepCall,
  VariableShorthandBinary,
  StepVariableShorthandBinary,
  StepChild,
  StepFunction,
  StepVariable,
  VariableExpression,
  VariableWithEmphasizePriorityAndState,
  ConditionalExpression,
  StepConditional,
  ExecutableCallBinary,
  ExecutableCallMagical,
  MagicalVariable,
  StepMagicalVariable,
  ExecutableStepCallMagical,
  ExecutableStepCallBinary
} from 'src/types/ExpressionTypes'

function toActive(
  e: VariableShorthandBinary
): StepVariableShorthandBinary<'active'>
function toActive(e: MagicalVariable): StepMagicalVariable<'active'>
function toActive(e: VariableExpression): StepVariable<'active'>
function toActive(e: FunctionExpression): StepFunction<'active'>
function toActive(e: ConditionalExpression): StepConditional<'active'>
function toActive(e: CallExpression): NonExecutableStepCall<'active'>
function toActive(
  e: VariableExpression | FunctionExpression
): StepVariable<'active'> | StepFunction<'active'>
function toActive(e: Expression): StepChild<'active'>
function toActive(e: Expression): StepChild<'active'> {
  if (isVariable(e)) {
    return {
      ...e,
      highlightType: 'active',
      topLeftBadgeType: 'none',
      bottomRightBadgeType: 'none'
    }
  } else if (isFunction(e)) {
    return {
      ...e,
      arg: toActive(e.arg),
      body: toActive(e.body)
    }
  } else if (isCall(e)) {
    return {
      ...e,
      state: 'default',
      arg: toActive(e.arg),
      func: toActive(e.func)
    }
  } else if (isConditional(e)) {
    return {
      ...e,
      state: 'default',
      condition: toActive(e.condition),
      trueCase: toActive(e.trueCase),
      falseCase: toActive(e.falseCase)
    }
  } else {
    throw new Error()
  }
}

const variableToEmphasize = (
  e: VariableExpression
): VariableWithEmphasizePriorityAndState<'active'> => {
  return {
    ...e,
    topLeftBadgeType: 'none',
    bottomRightBadgeType: 'none',
    highlightType: 'active',
    emphasizePriority: true
  }
}

const toExecutableActiveFunction = (
  e: FunctionExpression
): StepFunction<'active'> => ({
  ...e,
  arg: variableToEmphasize(e.arg),
  body: toActive(e.body)
})

const emphasizeArgPriorityCallExpression = (
  e: NonExecutableStepCall<'active'>
): NonExecutableStepCall<'active'> => {
  if (isVariable(e.arg)) {
    return {
      ...e,
      arg: variableToEmphasize(e.arg)
    }
  } else if (isFunction(e.arg)) {
    return {
      ...e,
      arg: toExecutableActiveFunction(e.arg)
    }
  } else if (isCall<NonExecutableStepCall<'active'>>(e.arg)) {
    return {
      ...e,
      arg: emphasizeArgPriorityCallExpression(e.arg)
    }
  } else {
    return e
  }
}

export default function stepToActive(
  e: ExecutableCallRegular
): ExecutableStepCallRegular<'active'>
export default function stepToActive(
  e: ExecutableCallMagical
): ExecutableStepCallMagical<'active'>
export default function stepToActive(
  e: ExecutableCallBinary
): ExecutableStepCallBinary<'active'>
export default function stepToActive(
  e: ExecutableCallRegular | ExecutableCallMagical | ExecutableCallBinary
):
  | ExecutableStepCallRegular<'active'>
  | ExecutableStepCallMagical<'active'>
  | ExecutableStepCallBinary<'active'> {
  if (isExecutableCallBinary(e)) {
    return {
      ...e,
      state: 'active',
      arg: {
        ...e.arg,
        arg: {
          ...e.arg.arg,
          topLeftBadgeType: 'none',
          bottomRightBadgeType: 'none',
          highlightType: 'active',
          emphasizePriority: true
        },
        func: {
          ...e.arg.func,
          topLeftBadgeType: 'none',
          bottomRightBadgeType: 'none',
          highlightType: 'active'
        }
      },
      func: {
        ...e.func,
        topLeftBadgeType: 'none',
        bottomRightBadgeType: 'none',
        highlightType: 'active',
        emphasizePriority: true
      }
    }
  } else {
    const arg = isFunction(e.arg)
      ? toExecutableActiveFunction(e.arg)
      : isVariable(e.arg)
      ? variableToEmphasize(e.arg)
      : isCall(e.arg)
      ? emphasizeArgPriorityCallExpression(toActive(e.arg))
      : toActive(e.arg)
    if (isExecutableCallRegular(e)) {
      return {
        ...e,
        state: 'active',
        arg,
        func: toExecutableActiveFunction(e.func)
      }
    } else {
      return {
        ...e,
        state: 'active',
        arg,
        func: {
          ...toActive(e.func),
          emphasizePriority: true
        }
      }
    }
  }
}
