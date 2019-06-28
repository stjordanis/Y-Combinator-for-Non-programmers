import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.hctu,
  showPriorities: true,
  containerSize: 'xs',
  variableSize: 'xs',
  nextIterations: 21
}

export default config
