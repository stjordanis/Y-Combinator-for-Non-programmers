import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/cfms.json'

// @ts-ignore
const Cfms = () => <ExpressionRunnerPrecomputed {...config} />

export default Cfms