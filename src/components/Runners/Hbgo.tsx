import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/hbgo.json'

// @ts-ignore
const Hbgo = () => <ExpressionRunnerPrecomputed {...config} />

export default Hbgo