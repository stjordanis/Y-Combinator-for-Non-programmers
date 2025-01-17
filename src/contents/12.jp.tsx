import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  HighlightBold,
  Highlight,
  Ul,
  Hr,
  UlLi,
  Bold
} from 'src/components/ContentTags'
import H from 'src/components/H'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiNumber from 'src/components/EmojiNumber'
import CardContent from 'src/components/CardContent'
import EmojiSeparator from 'src/components/EmojiSeparator'
import CustomEmoji from 'src/components/CustomEmoji'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import ExpressionRunnerCaptionOnly from 'src/components/ExpressionRunnerCaptionOnly'
import TwoColGrid from 'src/components/TwoColGrid'
import Emoji from 'src/components/Emoji'
import InlineBorder from 'src/components/InlineBorder'
import * as R from 'src/components/Runners'
import NextLessonButton from 'src/components/NextLessonButton'
import { TrueCaseExplanation, FalseCaseExplanation } from 'src/contents/11.jp'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>条件分岐の再現</>,
        content: (
          <>
            <P>
              村人たちは与えられたアドバイスをもとに、「
              <H args={{ name: 'conditionFeature' }} />
              」を弁当箱で再現しようとしていました。
            </P>
            <R.Rhoa>
              「<H args={{ name: 'conditionFeature' }} />
              」を…
            </R.Rhoa>
            <ExpressionRunnerSeparator />
            <EmojiSeparator
              emojis={['❓', '🍱', '❓']}
              description={
                <>
                  <HighlightBold>弁当箱で再現できる？</HighlightBold>
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        復習すると、上の計算箱は、
                        <HighlightBold>
                          もし <InlineBorder type="condition" /> が{' '}
                          <EmojiNumber number={0} /> なら真ん中の{' '}
                          <CustomEmoji type="blankNumberYellow" /> が残り…
                        </HighlightBold>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <TrueCaseExplanation />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        そして、
                        <HighlightBold>
                          もし <InlineBorder type="condition" /> が{' '}
                          <EmojiNumber number={0} /> 以外の数字なら、上の{' '}
                          <CustomEmoji type="blankNumberRed" /> が残るんだよな。
                        </HighlightBold>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <FalseCaseExplanation />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        これを弁当箱で再現するには、どうすればいいんだろう…？
                      </P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>サヤちゃんの案</>,
        content: (
          <>
            <P>するといつものように、サヤちゃんが何かひらめいたようです。</P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>サヤもちょっと考えてみた！これを見てくれる？</P>
                    </>
                  )
                }
              ]}
            />
            <R.Rhoa>
              「<H args={{ name: 'conditionFeature' }} />
              」を…
            </R.Rhoa>
            <ExpressionRunnerSeparator />
            <R.Vlhb>
              <Emoji>👧🏻</Emoji> 弁当箱で再現してみた！
            </R.Vlhb>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        なんと！じゃあ、これが本当に再現できてるか、確かめてみよう！
                      </P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: (
          <>
            <CustomEmoji type="blankNumberGreen" /> に{' '}
            <EmojiNumber number={0} /> を入れた場合
          </>
        ),
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        では、まずサヤの弁当箱の一番下の「
                        <HighlightBold>
                          <CustomEmoji type="blankNumberGreen" />{' '}
                          に変換できる弁当箱
                        </HighlightBold>
                        」のところに、「
                        <HighlightBold>
                          <EmojiNumber number={0} /> に変換できる弁当箱
                        </HighlightBold>
                        」を入れてみるね。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Hhjq>
              一番下の 「
              <HighlightBold>
                <CustomEmoji type="blankNumberGreen" /> に変換できる弁当箱
              </HighlightBold>
              」<br />
              のところに…
            </R.Hhjq>
            <ExpressionRunnerSeparator />
            <R.Ycpk>
              <EmojiNumber number={0} /> に変換できる
              <br />
              弁当箱を入れてみる
            </R.Ycpk>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        <Highlight>
                          使うのは、
                          <HighlightBold>
                            こちらの <EmojiNumber number={0} />{' '}
                            に変換できる弁当箱
                          </HighlightBold>
                          です！
                        </Highlight>
                      </P>
                      <R.Elyq>
                        <H
                          args={{
                            name: 'canBeConvertedCaption',
                            letter: 'f',
                            number: 0
                          }}
                        />
                      </R.Elyq>
                      <P>
                        入れてみると次のようになるよ。
                        <H args={{ name: 'pressRun', girl: true }} />
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Nmrp>
              「
              <HighlightBold>
                <CustomEmoji type="blankNumberGreen" /> に変換できる弁当箱
              </HighlightBold>
              」のところに、
              <br />
              <HighlightBold>
                <EmojiNumber number={0} /> に変換できる弁当箱
              </HighlightBold>
              を入れてみた
              <br />(<HighlightBold>一番下の黄色の部分</HighlightBold>)
            </R.Nmrp>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        <CustomEmoji type="blankNumberYellow" />{' '}
                        に変換できる弁当箱が残った！
                      </P>
                      <R.Bndi></R.Bndi>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        うん、これって「
                        <H args={{ name: 'conditionFeature' }} />
                        」を使ったときと同じだよね？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              「<H args={{ name: 'conditionFeature' }} />
              」を使った場合:
            </P>
            <R.Dqwh>
              <InlineBorder type="condition" /> に <EmojiNumber number={0} />{' '}
              を入れた場合…
            </R.Dqwh>
            <ExpressionRunnerSeparator />
            <R.Vwvb>
              <InlineBorder type="trueCase" /> に入っている{' '}
              <CustomEmoji type="blankNumberYellow" /> が残る
            </R.Vwvb>
            <P>
              <Emoji>👧🏻</Emoji> サヤの弁当箱を使った場合:
            </P>
            <R.Ycpk>
              一番下に <EmojiNumber number={0} /> に変換できる
              <br />
              弁当箱を入れた場合…
            </R.Ycpk>
            <ExpressionRunnerSeparator />
            <R.Bndi>
              <CustomEmoji type="blankNumberYellow" /> が残る
            </R.Bndi>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        たしかに、
                        <HighlightBold>
                          両方とも <EmojiNumber number={0} /> を入れると{' '}
                          <CustomEmoji type="blankNumberYellow" /> が残る
                        </HighlightBold>
                        ね！
                      </P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: (
          <>
            <CustomEmoji type="blankNumberGreen" /> に{' '}
            <EmojiNumber number={1} /> を入れた場合
          </>
        ),
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        次は、サヤの弁当箱の一番下の「
                        <HighlightBold>
                          <CustomEmoji type="blankNumberGreen" />{' '}
                          に変換できる弁当箱
                        </HighlightBold>
                        」のところに、「
                        <HighlightBold>
                          <EmojiNumber number={1} /> に変換できる弁当箱
                        </HighlightBold>
                        」を入れてみるね。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Hhjq>
              一番下の 「
              <HighlightBold>
                <CustomEmoji type="blankNumberGreen" /> に変換できる弁当箱
              </HighlightBold>
              」<br />
              のところに…
            </R.Hhjq>
            <ExpressionRunnerSeparator />
            <R.Psyv>
              <EmojiNumber number={1} /> に変換できる
              <br />
              弁当箱を入れてみる
            </R.Psyv>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        <Highlight>
                          使うのは、
                          <HighlightBold>
                            こちらの <EmojiNumber number={1} />{' '}
                            に変換できる弁当箱
                          </HighlightBold>
                          です！
                        </Highlight>
                      </P>
                      <R.Ooya>
                        <H
                          args={{
                            name: 'canBeConvertedCaption',
                            letter: 'f',
                            number: 1
                          }}
                        />
                      </R.Ooya>
                      <P>
                        入れてみると次のようになるよ。
                        <H args={{ name: 'pressRun', girl: true }} />
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Gpat>
              「
              <HighlightBold>
                <CustomEmoji type="blankNumberGreen" /> に変換できる弁当箱
              </HighlightBold>
              」のところに、
              <br />
              <HighlightBold>
                <EmojiNumber number={1} /> に変換できる弁当箱
              </HighlightBold>
              を入れてみた
              <br />(<HighlightBold>一番下の黄色の部分</HighlightBold>)
            </R.Gpat>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        おお、今度は先ほどと逆に、{' '}
                        <CustomEmoji type="blankNumberRed" />{' '}
                        に変換できる弁当箱が残った！
                      </P>
                      <R.Kiiq></R.Kiiq>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        これも、「
                        <H args={{ name: 'conditionFeature' }} />
                        」を使ったときと同じだよね？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              「<H args={{ name: 'conditionFeature' }} />
              」を使った場合:
            </P>
            <R.Glbk>
              <InlineBorder type="condition" /> に <EmojiNumber number={1} />{' '}
              を入れた場合…
            </R.Glbk>
            <ExpressionRunnerSeparator />
            <R.Rtza>
              <InlineBorder type="falseCase" /> に入っている{' '}
              <CustomEmoji type="blankNumberRed" /> が残る
            </R.Rtza>
            <P>
              <Emoji>👧🏻</Emoji> サヤの弁当箱を使った場合:
            </P>
            <R.Psyv>
              一番下に <EmojiNumber number={1} /> に変換できる
              <br />
              弁当箱を入れた場合…
            </R.Psyv>
            <ExpressionRunnerSeparator />
            <R.Kiiq>
              <CustomEmoji type="blankNumberRed" /> が残る
            </R.Kiiq>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        たしかに、
                        <HighlightBold>
                          両方とも <EmojiNumber number={1} /> を入れると{' '}
                          <CustomEmoji type="blankNumberRed" /> が残る
                        </HighlightBold>
                        ね！
                      </P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>やっぱりサヤちゃんが正解？</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        とういうことは、やっぱりサヤちゃんの弁当箱が、「
                        <H args={{ name: 'conditionFeature' }} />
                        」の再現としては正解なのかな？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Rhoa>
              「<H args={{ name: 'conditionFeature' }} />
              」を…
            </R.Rhoa>
            <ExpressionRunnerSeparator />
            <R.Vlhb>
              <Emoji>👧🏻</Emoji> サヤちゃんが弁当箱で再現してみた！
              <br />
              <HighlightBold>果たして、これが正解なのか？</HighlightBold>
            </R.Vlhb>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>念のため、最終チェックをしたほうがいいかも！</P>
                    </>
                  )
                },
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>最終チェックだって？</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: (
          <>
            <CustomEmoji type="blankNumberRed" />{' '}
            <CustomEmoji type="blankNumberYellow" />{' '}
            <CustomEmoji type="blankNumberGreen" /> 全てを埋める
          </>
        ),
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>いちおう最終チェックとして、</P>
                      <Ul>
                        <UlLi>
                          <Highlight>
                            <CustomEmoji type="blankNumberRed" />{' '}
                            <CustomEmoji type="blankNumberYellow" />{' '}
                            <CustomEmoji type="blankNumberGreen" />{' '}
                            の全てを埋めてみて、
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            それをサヤの弁当箱でも再現できるかやってみるよ！
                          </Highlight>
                        </UlLi>
                      </Ul>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>ん？どういうこと？</P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>たとえば、</P>
                      <Ul>
                        <UlLi>
                          <Highlight>
                            条件分岐の機能がある計算箱の{' '}
                            <CustomEmoji type="blankNumberRed" />{' '}
                            <CustomEmoji type="blankNumberYellow" />{' '}
                            <CustomEmoji type="blankNumberGreen" /> に、
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            それぞれ <EmojiNumber number={2} />{' '}
                            <EmojiNumber number={1} />{' '}
                            <EmojiNumber number={0} /> を入れた場合…
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          最終的に <EmojiNumber number={1} /> が残るよね。
                        </UlLi>
                      </Ul>
                    </>
                  )
                }
              ]}
            />
            <R.Rhoa>
              <CustomEmoji type="blankNumberRed" />{' '}
              <CustomEmoji type="blankNumberYellow" />{' '}
              <CustomEmoji type="blankNumberGreen" /> の部分に、
            </R.Rhoa>
            <ExpressionRunnerSeparator />
            <R.Zdpf>
              <EmojiNumber number={2} /> <EmojiNumber number={1} />{' '}
              <EmojiNumber number={0} /> を入れた場合、
              <br />
              <InlineBorder type="condition" /> が <EmojiNumber number={0} />{' '}
              なので…
            </R.Zdpf>
            <ExpressionRunnerSeparator />
            <R.Rnug>
              <InlineBorder type="trueCase" /> に入っていた{' '}
              <EmojiNumber number={1} /> が残る
            </R.Rnug>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        では、
                        <Highlight>
                          サヤの弁当箱の <CustomEmoji type="blankNumberRed" />{' '}
                          <CustomEmoji type="blankNumberYellow" />{' '}
                          <CustomEmoji type="blankNumberGreen" /> にも{' '}
                          <EmojiNumber number={2} /> <EmojiNumber number={1} />{' '}
                          <EmojiNumber number={0} /> を入れてみるよ。
                        </Highlight>
                      </P>
                      <P>
                        これを
                        <H args={{ name: 'run' }} /> したとき、
                        <Highlight>
                          先ほど同じく結果が <EmojiNumber number={1} /> になれば
                          <HighlightBold>
                            成功
                          </HighlightBold> <Emoji>🎉</Emoji> というわけだよね。
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Vlhb>
              <Emoji>👧🏻</Emoji> サヤの弁当箱の…
            </R.Vlhb>
            <ExpressionRunnerSeparator />
            <R.Jbqw>
              <CustomEmoji type="blankNumberRed" /> に{' '}
              <EmojiNumber number={2} /> を、
              <br />
              <CustomEmoji type="blankNumberYellow" /> に{' '}
              <EmojiNumber number={1} /> を、
              <br />
              <CustomEmoji type="blankNumberGreen" /> に{' '}
              <EmojiNumber number={0} /> を入れてみた
            </R.Jbqw>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              <Highlight>
                <EmojiNumber size="mdlg" number={1} /> に変換できる弁当箱
                <br />
                になれば<HighlightBold>成功</HighlightBold> <Emoji>🎉</Emoji>
              </Highlight>
            </ExpressionRunnerCaptionOnly>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        なるほど。これを実行して <EmojiNumber number={1} />{' '}
                        に変換できる弁当箱になれば…
                      </P>
                      <P>
                        サヤちゃんの弁当箱が条件分岐の機能を再現できていると見て間違いないな。
                      </P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>では確かめてみよう！</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        では、
                        <EmojiNumber number={2} /> <EmojiNumber number={1} />{' '}
                        <EmojiNumber number={0} />{' '}
                        にそれぞれ変換できる弁当箱を入れてみたよ。(黄色の部分)
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jbqw>
              <CustomEmoji type="blankNumberRed" /> に{' '}
              <EmojiNumber number={2} /> を、
              <br />
              <CustomEmoji type="blankNumberYellow" /> に{' '}
              <EmojiNumber number={1} /> を、
              <br />
              <CustomEmoji type="blankNumberGreen" /> に{' '}
              <EmojiNumber number={0} /> を入れてみた
            </R.Jbqw>
            <ExpressionRunnerSeparator />
            <R.Kfru>
              <EmojiNumber number={2} /> <EmojiNumber number={1} />{' '}
              <EmojiNumber number={0} /> にそれぞれ変換できる
              <br />
              弁当箱を入れてみた
            </R.Kfru>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        というわけで、
                        <H args={{ name: 'pressRun', girl: true }} />
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Svbd></R.Svbd>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        最終的に残ったこちらの弁当箱は、
                        <EmojiNumber number={1} /> に変換できる弁当箱だね。
                      </P>
                      <R.Ooya>
                        <H
                          args={{
                            name: 'canBeConvertedCaption',
                            letter: 'f',
                            number: 1
                          }}
                        />
                      </R.Ooya>
                      <P>
                        だから、
                        <EmojiNumber number={1} /> が残ったので、
                        <HighlightBold>
                          成功
                        </HighlightBold> <Emoji>🎉</Emoji> だよ！
                      </P>
                    </>
                  )
                },
                {
                  type: 'celebrate',
                  children: (
                    <>
                      <P>やったー、さすがサヤちゃん！</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>すごい！まとめると、下のようになります！</P>
                    </>
                  )
                }
              ]}
            />
            <P>
              「<H args={{ name: 'conditionFeature' }} />
              」を使った場合:
            </P>
            <R.Zdpf></R.Zdpf>
            <ExpressionRunnerSeparator />
            <R.Rnug>
              結果は <EmojiNumber number={1} /> になる
            </R.Rnug>
            <P>
              <Emoji>👧🏻</Emoji> サヤの弁当箱を使った場合:
            </P>
            <R.Jbqw></R.Jbqw>
            <ExpressionRunnerSeparator />
            <R.Jzwg>
              結果は <EmojiNumber number={1} /> になる
            </R.Jzwg>
          </>
        )
      },
      {
        type: 'summary',
        title: (
          <>
            <H args={{ name: 'summary' }} />
          </>
        ),
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>お見事！サヤちゃん、正解です！</P>
                      <P>
                        サヤちゃんの弁当箱は、「
                        <H args={{ name: 'conditionFeature' }} />
                        」を再現しています！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Rhoa>
              「<H args={{ name: 'conditionFeature' }} />
              」は…
            </R.Rhoa>
            <ExpressionRunnerSeparator />
            <R.Vlhb>
              <Emoji>👧🏻</Emoji> サヤちゃんの弁当箱で
              <br />
              再現できている！
            </R.Vlhb>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>やったー！</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        まとめると、
                        <Highlight>
                          計算箱の「
                          <H args={{ name: 'conditionFeature' }} />
                          」も、弁当箱で再現することができる
                        </Highlight>
                        のです。このポイントさえ覚えていただければ、細かいことは分からなくても大丈夫です！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <CustomEmoji type="condition" />,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="condition" />
              ]}
              description={
                <>
                  計算箱の「
                  <H args={{ name: 'conditionFeature' }} />
                  」も、
                  <br />
                  弁当箱で「<HighlightBold>再現</HighlightBold>
                  」することができる
                </>
              }
            />
          </>
        ),
        footer: {
          content: (
            <>
              <CardContent
                children={
                  <>
                    <Hr />
                    <P>
                      <Emoji>👧🏻</Emoji> サヤちゃんが考えた弁当箱以外にも、
                      <HighlightBold>
                        以下の法則に当てはまる弁当箱であれば、どれでも 「
                        <H args={{ name: 'conditionFeature' }} />
                        」を再現できます。
                      </HighlightBold>
                    </P>
                    <R.Fton>
                      この法則に当てはまる弁当箱であれば、
                      <br />
                      「<H args={{ name: 'conditionFeature' }} />
                      」を再現できる
                    </R.Fton>
                    <P>
                      たとえば、以下のような弁当箱でも、「
                      <H args={{ name: 'conditionFeature' }} />
                      」を再現することができます。
                    </P>
                    <R.Imhz>
                      これも「
                      <H args={{ name: 'conditionFeature' }} />
                      」を再現できる
                    </R.Imhz>
                  </>
                }
                preview={{
                  text: <>続きを読む</>,
                  content: (
                    <>
                      <P>
                        <Bold>ちなみに:</Bold> 「
                        <H args={{ name: 'conditionFeature' }} />
                        」を再現できる弁当箱は、
                        <HighlightBold>
                          <Emoji>👧🏻</Emoji>{' '}
                          サヤちゃんが考えた弁当箱以外にもあります。
                        </HighlightBold>
                        つまり、正解は他にもあるのです。
                      </P>
                      <P>
                        気になる方は、↓の「続きを読む」を押してみてください。
                        (読まなくても先に進めます！)
                      </P>
                    </>
                  )
                }}
              />
            </>
          )
        }
      },
      {
        title: <>繰り返しの機能は？</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>うーん、条件分岐の機能を再現できたのはいいとして…</P>
                      <P>
                        俺らがやりたいのは、「
                        <H args={{ name: 'repeatFeature' }} />
                        」を弁当箱で再現することなんだけど…
                      </P>
                    </>
                  )
                }
              ]}
            />
            <TwoColGrid
              left={
                <>
                  <R.Bwnp>
                    <CustomEmoji type="plusOne" /> を{' '}
                    <CustomEmoji type="blankNumber" /> 回<br />
                    繰り返す
                  </R.Bwnp>
                  <ExpressionRunnerSeparator />
                  <EmojiSeparator
                    size="mdsm"
                    emojis={['❓', '🍱', '❓']}
                    description={<>弁当箱で再現</>}
                  />
                </>
              }
              right={
                <>
                  <R.Ewfr>
                    <CustomEmoji type="minusOne" /> を{' '}
                    <CustomEmoji type="blankNumber" /> 回<br />
                    繰り返す
                  </R.Ewfr>
                  <ExpressionRunnerSeparator />
                  <EmojiSeparator
                    size="mdsm"
                    emojis={['❓', '🍱', '❓']}
                    description={<>弁当箱で再現</>}
                  />
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        そうですね。しかし、上級その1でぼくが言ったことを思い出して下さい。
                      </P>
                      <P>
                        <Highlight>
                          「<H args={{ name: 'conditionFeature' }} />
                          」は、「
                          <H args={{ name: 'repeatFeature' }} />
                          」と<HighlightBold>関連がある</HighlightBold>のです。
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="condition" />,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>🔁</Emoji>
              ]}
              description={
                <>
                  「<H args={{ name: 'conditionFeature' }} />
                  」は、
                  <br />「<H args={{ name: 'repeatFeature' }} />
                  」と関連がある
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        だから、先ほど「
                        <H args={{ name: 'conditionFeature' }} />
                        」を弁当箱で再現したことによって、
                      </P>
                      <P>
                        みなさんは「
                        <H args={{ name: 'repeatFeature' }} />
                        」を弁当箱で再現するのに大きく近づいたのです。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <CustomEmoji type="condition" />,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="condition" />
              ]}
              description={
                <>
                  「<H args={{ name: 'conditionFeature' }} />
                  」を
                  <br />
                  弁当箱で再現したことにより…
                </>
              }
            />
            <ExpressionRunnerSeparator />
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <Emoji>🔁</Emoji>,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>🍱</Emoji>,
                <Emoji>❓</Emoji>
              ]}
              description={
                <>
                  「<H args={{ name: 'repeatFeature' }} />
                  」を
                  <br />
                  弁当箱で再現するのに大きく近づいた！
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>うーん…そう言われても、どういうことやらさっぱり…</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        では、
                        <HighlightBold>
                          次のページでまたヒントを出しましょう！
                        </HighlightBold>
                      </P>
                      <P>というわけで、先に進んでみてください。</P>
                    </>
                  )
                }
              ]}
            />
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)
