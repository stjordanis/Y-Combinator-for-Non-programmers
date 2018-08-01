import expressionToSimpleString from 'src/lib/expressionToSimpleString'
import findNextCallExpressionAndParent from 'src/lib/findNextCallExpressionAndParent'
import initializeExpressionContainer from 'src/lib/initializeExpressionContainer'
import stepExpressionContainer from 'src/lib/stepExpressionContainer'
import { ImmediatelyExecutableCallExpression } from 'src/types/ExecutableExpressionTypes'
import {
  DoneExpressionContainer,
  isPrioritizedExpressionContainer,
  PrioritizedExpressionContainer
} from 'src/types/ExpressionContainerTypes'
import { PrioritizedCallExpression } from 'src/types/PrioritizedExpressionTypes'

const stepExpressionContainerWrapped = (
  e: PrioritizedExpressionContainer<PrioritizedCallExpression>
): PrioritizedExpressionContainer<ImmediatelyExecutableCallExpression> => {
  const result = stepExpressionContainer(e)
  if (
    !isPrioritizedExpressionContainer<ImmediatelyExecutableCallExpression>(
      result
    )
  ) {
    throw new Error()
  }
  return result
}

const repeatUntilState = (
  e: PrioritizedExpressionContainer<ImmediatelyExecutableCallExpression>,
  state: string
) => {
  while (true) {
    const result = findNextCallExpressionAndParent(e.expression)
    if ('expression' in result && result.expression.state === state) {
      return e
    }
    e = stepExpressionContainerWrapped(e)
  }
}

const repeatUntilDone = (
  e: PrioritizedExpressionContainer<PrioritizedCallExpression>
) => {
  let result:
    | PrioritizedExpressionContainer<PrioritizedCallExpression>
    | DoneExpressionContainer = stepExpressionContainerWrapped(e)
  while (!result.done) {
    result = stepExpressionContainerWrapped(result)
  }
  return result
}

describe('stepExpressionContainer', () => {
  describe('if no next call is found', () => {
    it('is done', () => {
      const originalContainer = initializeExpressionContainer(['y', 'x'])
      expect(stepExpressionContainer(originalContainer).done).toBe(true)
    })
  })

  describe('if next call is found', () => {
    it('activates the call', () => {
      const originalContainer = initializeExpressionContainer([
        {
          arg: 'x',
          body: 'y'
        },
        'x'
      ])

      let e = stepExpressionContainerWrapped(originalContainer)
      expect(e.expression.state).toBe('readyToHighlight')

      e = stepExpressionContainerWrapped(e)
      expect(e.expression.func.arg.state).toBe('highlighted')

      e = stepExpressionContainerWrapped(e)
      expect(e.expression.arg.state).toBe('highlighted')

      e = stepExpressionContainerWrapped(e)
      expect(e.expression.func.body.state).toBe('highlighted')

      e = stepExpressionContainerWrapped(e)
      expect(e.expression.state).toBe('checkForConflictingVariables')
    })
  })

  describe('if ready to check variable conflicts', () => {
    describe('if alpha convert is not necessary', () => {
      it('is now ready to beta reduce', () => {
        const originalContainer = initializeExpressionContainer([
          {
            arg: 'x',
            body: 'y'
          },
          'x'
        ])

        let e = stepExpressionContainerWrapped(originalContainer)
        e = repeatUntilState(e, 'checkForConflictingVariables')
        e = stepExpressionContainerWrapped(e)
        expect(e.expression.state).toBe('readyToBetaReduce')
      })
    })

    describe('if alpha convert is necessary', () => {
      it('indicates that alpha convert is necessary', () => {
        const originalContainer = initializeExpressionContainer([
          {
            arg: 'x',
            body: {
              arg: 'y',
              body: ['x', 'y']
            }
          },
          'y'
        ])

        let e = stepExpressionContainerWrapped(originalContainer)
        e = repeatUntilState(e, 'checkForConflictingVariables')
        e = stepExpressionContainerWrapped(e)
        expect(e.expression.state).toBe('needsAlphaConvert')
      })
    })
  })

  describe('if needs alpha convert', () => {
    it('does alpha conversion', () => {
      const originalContainer = initializeExpressionContainer([
        {
          arg: 'x',
          body: {
            arg: 'y',
            body: ['x', 'y']
          }
        },
        'y'
      ])

      let e = stepExpressionContainerWrapped(originalContainer)
      e = repeatUntilState(e, 'needsAlphaConvert')
      e = stepExpressionContainerWrapped(e)
      expect(e.expression.state).toBe('readyToBetaReduce')
      expect(expressionToSimpleString(e.expression)).toBe(
        '(x => (a => x(a)))(y)'
      )
    })
  })

  describe('if ready for beta reduction', () => {
    describe('top level beta reduction, simple', () => {
      it('does beta reduction', () => {
        const originalContainer = initializeExpressionContainer([
          {
            arg: 'x',
            body: 'x'
          },
          'y'
        ])

        let e = stepExpressionContainerWrapped(originalContainer)
        e = repeatUntilState(e, 'readyToBetaReduce')
        const result = stepExpressionContainerWrapped(e)
        expect(expressionToSimpleString(result.expression)).toBe('y')
        expect(result.needsReset).toBe(true)
      })
    })

    describe('non-top level beta reduction, complicated', () => {
      it('does beta reduction', () => {
        const originalContainer = initializeExpressionContainer([
          {
            arg: 'x',
            body: {
              arg: 'y',
              body: {
                arg: 'z',
                body: ['x', ['y', 'z']]
              }
            }
          },
          {
            arg: 'a',
            body: 'a'
          },
          {
            arg: 'b',
            body: 'b'
          },
          'c'
        ])

        let e = stepExpressionContainerWrapped(originalContainer)
        e = repeatUntilState(e, 'readyToBetaReduce')
        const result = stepExpressionContainerWrapped(e)
        expect(expressionToSimpleString(result.expression)).toBe(
          '(y => (z => (a => a)(y(z))))((b => b))(c)'
        )
        expect(result.needsReset).toBe(true)
        const afterReset = stepExpressionContainer(result)
        expect(afterReset.expression.state).toBe('default')
        expect(afterReset.needsReset).toBe(false)
      })
    })
  })

  describe('repeat until done', () => {
    it('completes', () => {
      const originalContainer = initializeExpressionContainer([
        {
          arg: 'x',
          body: {
            arg: 'y',
            body: {
              arg: 'z',
              body: ['x', ['y', 'z']]
            }
          }
        },
        {
          arg: 'a',
          body: 'a'
        },
        {
          arg: 'b',
          body: 'b'
        },
        'c'
      ])

      const e = repeatUntilDone(originalContainer)
      expect(expressionToSimpleString(e.expression)).toBe('c')
    })
  })
})
