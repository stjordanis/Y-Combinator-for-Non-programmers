import { ExpressionRunnerShorthandConfig } from 'scripts/lib/expressionRunnerShorthandConfig'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  lessonExpressionsKey: 'e11E3',
  showPriorities: true,
  initialState: 'showFuncUnbound',
  containerSize: 'xs',
  variableSize: 'md',
  highlightOverrides: { b: 'highlighted' },
  highlightOverrideActiveAfterStart: true,
  showOnlyFocused: true,
  caption: { name: 'mustChangeBothFuncUnboundAndBound' }
}

export default config
