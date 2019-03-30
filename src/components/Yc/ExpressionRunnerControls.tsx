/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import ButtonWithTouchActiveStates from 'src/components/ButtonWithTouchActiveStates'
import H from 'src/components/H'
import { colors, fontSizes, radii, spaces } from 'src/lib/theme'

const Button = (props: JSX.IntrinsicElements['button']) => (
  <ButtonWithTouchActiveStates
    {...props}
    activeBackgroundColor={colors('indigo100')}
    css={css`
      border-radius: ${radii(0.25)};
      border: 2px solid ${colors('indigo300')};
      background: #fff;
      color: ${colors('indigo500')};
      font-size: ${fontSizes(0.85)};
      padding: ${spaces(0.5)} 0;
      &:enabled {
        cursor: pointer;
      }

      &:disabled,
      &:active:disabled {
        color: ${colors('indigo300')};
        background: ${colors('indigo50')};
      }

      @media (hover: hover) {
        &:hover:enabled {
          background: ${colors('indigo50')};
        }
        &:focus {
          box-shadow: inset 0 0 0 1px ${colors('indigo300')};
          outline: none;
        }
      }
      &:active:enabled {
        background: ${colors('indigo100')};
      }
    `}
  />
)

interface ExpressionRunnerControlsProps {
  canStepForward: boolean
  canStepBackward: boolean
  isDone: boolean
  isPlaying: boolean
  showPlayButton: boolean
  hideForwardAndBackButtons: boolean
  skipToTheEnd: boolean
  onNextClick: () => void
  onPreviousClick: () => void
  onAutoClick: () => void
  onPauseClick: () => void
  onResetClick: () => void
  onSkipToTheEndClick: () => void
}

const noOp = () => {
  return
}

const ExpressionRunnerControls = ({
  canStepForward,
  canStepBackward,
  onNextClick,
  onPreviousClick,
  showPlayButton,
  isPlaying,
  onAutoClick,
  onPauseClick,
  onResetClick,
  onSkipToTheEndClick,
  skipToTheEnd,
  hideForwardAndBackButtons,
  isDone
}: ExpressionRunnerControlsProps) => (
  <div
    css={css`
      display: flex;
      justify-content: center;
      margin: ${spaces(0.75)} -2px 0 -2px;
    `}
  >
    {!hideForwardAndBackButtons && !isPlaying && canStepBackward ? (
      <Button
        onClick={onPreviousClick}
        css={css`
          flex: 1;
          margin-right: ${spaces(0.25)};
        `}
      >
        <H args={{ name: 'previous' }} />
      </Button>
    ) : (
      !skipToTheEnd && (
        <div
          css={css`
            flex: 1;
            margin-right: ${spaces(0.25)};
            /* Same border as the button */
            border: 2px solid transparent;
          `}
        />
      )
    )}
    {showPlayButton &&
      (canStepForward || isDone ? (
        <Button
          onClick={
            canStepForward
              ? skipToTheEnd
                ? onSkipToTheEndClick
                : isPlaying
                ? onPauseClick
                : onAutoClick
              : onResetClick
          }
          css={[
            css`
              flex: ${skipToTheEnd ? 0.5 : 1};
              margin-left: ${spaces(skipToTheEnd ? 0 : 0.25)};
              margin-right: ${spaces(skipToTheEnd ? 0 : 0.25)};
            `,
            canStepForward &&
              !isPlaying &&
              css`
                background: ${colors('yellow100')};
              `,
            !canStepForward &&
              css`
                background: ${colors('pink50')};
              `
          ]}
        >
          {canStepForward ? (
            isPlaying ? (
              <H args={{ name: 'pause' }} highlightType="none" />
            ) : (
              <H args={{ name: 'play' }} highlightType="none" />
            )
          ) : (
            <H args={{ name: 'reset' }} highlightType="none" />
          )}
        </Button>
      ) : (
        <div
          css={css`
            flex: 1;
            margin-left: ${spaces(0.25)};
            /* Same border as the button */
            border: 2px solid transparent;
          `}
        />
      ))}
    {!hideForwardAndBackButtons && !isPlaying && (canStepForward || isDone) ? (
      <Button
        onClick={canStepForward ? onNextClick : noOp}
        disabled={!canStepForward}
        css={css`
          flex: 1;
          margin-left: ${spaces(0.25)};
        `}
      >
        {canStepForward ? (
          <H args={{ name: 'next' }} />
        ) : (
          <H args={{ name: 'done' }} />
        )}
      </Button>
    ) : (
      !skipToTheEnd && (
        <div
          css={css`
            flex: 1;
            margin-left: ${spaces(0.25)};
            /* Same border as the button */
            border: 2px solid transparent;
          `}
        />
      )
    )}
  </div>
)

export default ExpressionRunnerControls
