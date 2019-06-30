import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/qifg.json'

// @ts-ignore
const Qifg = () => <ExpressionRunnerPrecomputed {...config} />

export default Qifg