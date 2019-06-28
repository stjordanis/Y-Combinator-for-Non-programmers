import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.atos,
  showPriorities: true,
  containerSize: 'xs',
  variableSize: 'md',
  caption: { name: 'secretCodeTwoMinusOneCaption' }
}

export default config
