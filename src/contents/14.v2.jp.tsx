import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Strong, Em, Ul, UlLi } from 'src/components/ContentTags'
import H from 'src/components/H'
import BubbleQuotes from 'src/components/BubbleQuotes'
import Emoji from 'src/components/Emoji'
import EmojiNumber from 'src/components/EmojiNumber'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import InlineBorder from 'src/components/InlineBorder'
// import CustomEmoji from 'src/components/CustomEmoji'
// import EmojiForLetter from 'src/components/EmojiForLetter'
// import EmojiSeparator from 'src/components/EmojiSeparator'
// import TwoColGrid from 'src/components/TwoColGrid'
// import InlineBorder from 'src/components/InlineBorder'
import * as R from 'src/components/Runners'
// import ExpressionRunnerCaptionOnly from 'src/components/ExpressionRunnerCaptionOnly'
// import NextLessonButton from 'src/components/NextLessonButton'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: (
          <>
            <P>前回では…</P>
          </>
        ),
        content: (
          <>
            <P>
              前回は、
              <Em>
                計算箱の「<Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
                」を、<Emoji>👧🏻</Emoji>{' '}
                サヤちゃんが考えた以下の弁当箱を使えば再現できるかも？
              </Em>
              というところで終わりました。
            </P>
            <R.Nmbt>
              「<Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
              」を使った計算箱は…
            </R.Nmbt>
            <ExpressionRunnerSeparator />
            <R.Svig>
              以下の弁当箱で「<Strong>再現</Strong>」できている？
              <Emoji>🤔</Emoji>
            </R.Svig>
            <P>今回は、これを実際に検証していきましょう！</P>
          </>
        )
      },
      {
        title: <>早送りしてみる</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        では、前回同様
                        <Em>
                          {' '}
                          <Emoji>🅰️</Emoji> に <EmojiNumber number={3} />、
                          <Emoji>🅱️</Emoji> に <EmojiNumber number={2} />{' '}
                        </Em>
                        を入れてみるね。
                      </P>
                      <P>
                        前回話した通り、
                        <Em>
                          <H args={{ name: 'play' }} /> すると{' '}
                          <EmojiNumber number={5} /> になる
                        </Em>
                        よ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Osxt>
              <EmojiNumber number={3} /> と <EmojiNumber number={2} /> に
            </R.Osxt>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        では、
                        <Em>
                          これを今回は
                          <H args={{ name: 'fastForward' }} />{' '}
                          してみるね！早送りをすることで、どういう原理になっているかが分かるかも。
                        </Em>
                      </P>
                      <P>
                        時間がかかるので、何度も止めながらやっていくよ。というわけで、
                        <H args={{ name: 'pressFastForward', girl: true }} />
                      </P>
                      <Ul>
                        <UlLi>
                          複雑なので、<Em>目で追わなくても大丈夫だよ！</Em>
                        </UlLi>
                        <UlLi>
                          ちょっと時間がかかるので、待てない方は下の「
                          <Strong>
                            <H args={{ name: 'skipToTheStoppingPoint' }} /> →
                          </Strong>
                          」を押してね！
                        </UlLi>
                      </Ul>
                    </>
                  )
                }
              ]}
            />
            <R.Ovua></R.Ovua>
            <BubbleQuotes
              quotes={[
                {
                  type: 'tired',
                  children: (
                    <>
                      <P>めちゃくちゃ複雑だなあ…</P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        でもちょっと立ち止まって考えてみて。まず、この
                        <Em>真ん中の黄色で示した部分</Em>に注目してくれる？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Bras>
              真ん中の<Strong>黄色い部分</Strong>に注目
            </R.Bras>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        上の黄色の部分が複雑なので、
                        <Em>
                          <Strong>分かりやすくするために、</Strong>そこだけを{' '}
                          <Emoji>🍱</Emoji>{' '}
                          のアイコンに置き換えて省略してみると、下のようになる
                        </Em>
                        よ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Yyfi>
              先ほどの弁当箱の<Strong>黄色い部分</Strong>を<br />
              <Emoji>🍱</Emoji> と置き換えて省略した
            </R.Yyfi>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>この時点で、</P>
                      <Ul>
                        <UlLi>
                          <Strong>
                            <InlineBorder type="condition" /> には{' '}
                            <EmojiNumber number={3} /> が入っている
                          </Strong>
                        </UlLi>
                      </Ul>
                      <P>…ということを覚えておいて。</P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>ん？なんでそれを覚えておく必要があるんだい？</P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>後で大事になってくるからだよ。</P>
                      <P>
                        では続きを見てみよう。
                        <Strong>
                          <InlineBorder type="condition" /> には{' '}
                          <EmojiNumber number={3} /> が入っているので、
                          <InlineBorder type="falseCase" /> のほうが残ります。
                        </Strong>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Avsl></R.Avsl>
            <ExpressionRunnerSeparator />
            <R.Fkqu></R.Fkqu>
          </>
        )
      },
      {
        title: <>2回目は…</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        じゃあ、<Emoji>🍱</Emoji> を省略する前の状態(
                        <Em>黄色の部分</Em>)に戻すね。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ngxc>
              <Emoji>🍱</Emoji> の部分を…
            </R.Ngxc>
            <ExpressionRunnerSeparator />
            <R.Fkvy>省略前の状態に戻す</R.Fkvy>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        では、続きを見てみよう！
                        <H args={{ name: 'pressFastForward', girl: true }} />
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Dwmc></R.Dwmc>
          </>
        )
      }
      // TODO: Compare w/ the previous iteration using TwoColGrid
    ]}
  />
)
