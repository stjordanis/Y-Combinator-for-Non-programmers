import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  Strong,
  Hr,
  Em,
  Ul,
  UlLi,
  InlineHeader
} from 'src/components/ContentTags'
import H from 'src/components/H'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiNumber from 'src/components/EmojiNumber'
import EmojiSeparator from 'src/components/EmojiSeparator'
import CustomEmoji from 'src/components/CustomEmoji'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import ExpressionRunnerCaptionOnly from 'src/components/ExpressionRunnerCaptionOnly'
import Emoji from 'src/components/Emoji'
import TwoColGrid from 'src/components/TwoColGrid'
import InlineBorder from 'src/components/InlineBorder'
import * as R from 'src/components/Runners'
import NextLessonButton from 'src/components/NextLessonButton'
import YesNoButtons from 'src/components/YesNoButtons'
import { TwoPlusFour, Conclusion } from 'src/contents/2.jp'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>上級編へようこそ！</>,
        content: (
          <>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="plusOne" />,
                <Emoji>🤗</Emoji>,
                <CustomEmoji type="minusOne" />
              ]}
            />
            <P>
              中級編では、<Emoji>😈</Emoji> 悪魔から計算箱の「
              <Strong>1を足す機能</Strong> <CustomEmoji type="plusOne" />
              」と「<Strong>1を引く機能</Strong> <CustomEmoji type="minusOne" />
              」を返してもらいました。どちらも、弁当箱で再現することができたのです。
            </P>
            <R.Rviy>
              「<Strong>1を足す機能</Strong> <CustomEmoji type="plusOne" />」
            </R.Rviy>
            <ExpressionRunnerSeparator />
            <R.Eweo>弁当箱で再現</R.Eweo>
            <Hr />
            <R.Ditw>
              <Strong>1を引く機能</Strong> <CustomEmoji type="minusOne" />
            </R.Ditw>
            <ExpressionRunnerSeparator />
            <R.Bgko>弁当箱で再現</R.Bgko>
          </>
        )
      },
      {
        title: (
          <>
            「<Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
            」の復習
          </>
        ),
        content: (
          <>
            <P>
              一方、「<Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
              」は、まだ返してもらっていません。これを弁当箱で再現できないと返してもらえないのです。
            </P>
            <TwoColGrid
              noTopNegativeMargin
              noBottomNegativeMargin
              left={
                <>
                  <R.Bwnp>
                    <CustomEmoji type="plusOne" /> を{' '}
                    <CustomEmoji type="blankNumber" /> 回<br />
                    繰り返す
                  </R.Bwnp>
                </>
              }
              right={
                <>
                  <R.Ewfr>
                    <CustomEmoji type="minusOne" /> を{' '}
                    <CustomEmoji type="blankNumber" /> 回<br />
                    繰り返す
                  </R.Ewfr>
                </>
              }
            />
            <P>
              「<Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
              」について忘れてしまった方も多いと思うので、ここで復習をしましょう。
            </P>
            <P>
              まず、こちらの計算箱をご覧になり、
              <H args={{ name: 'pressPlay' }} />
            </P>
            <TwoPlusFour />
          </>
        )
      },
      {
        title: <>大きな数の足し算や引き算に役立つ</>,
        content: (
          <>
            <P>
              こちらも復習になりますが、ラムダ村の村人たちにとって、計算箱の「
              <Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
              」は、
              <Strong>
                大きな数の足し算や引き算をするときに欠かせない機能
              </Strong>
              でした。
            </P>
            <EmojiSeparator
              nodes={[<Emoji>✨</Emoji>, <Emoji>🔁</Emoji>, <Emoji>✨</Emoji>]}
              description={
                <>
                  「<Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
                  」は、大きな数の
                  <br />
                  足し算・引き算に欠かせない
                </>
              }
            />
            <P>
              たとえば、
              <EmojiNumber number={10} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={10} />{' '}
              を計算したい場合、繰り返しの機能を使わないと、
              <CustomEmoji type="plusOne" /> を10回配置する必要があります。
            </P>
            <R.Amoq>
              <CustomEmoji type="plusOne" /> を10回配置
            </R.Amoq>
            <P>
              <Strong>
                しかし初級その2でもやった通り、
                <CustomEmoji type="plusOne" /> の数が増えると、
                <CustomEmoji type="plusOne" />{' '}
                の数を間違えてしまう可能性があります。
              </Strong>
              そうすると、正しい計算ができません。
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>❌</Emoji>,
                <CustomEmoji type="plusOne" />,
                <Emoji>❌</Emoji>
              ]}
              description={
                <>
                  <CustomEmoji type="plusOne" /> の数を間違えやすい
                </>
              }
            />
            <P>
              一方、繰り返しの機能を使えば、
              <EmojiNumber number={10} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={10} />{' '}
              といった計算も、以下のようにシンプルになります。
              <CustomEmoji type="plusOne" /> の数を間違えることもありません。
            </P>
            <R.Jehv>
              <CustomEmoji type="plusOne" /> を <EmojiNumber number={10} />{' '}
              回繰り返す
            </R.Jehv>
            <Conclusion />
          </>
        )
      },
      {
        title: <>どうやって再現する？</>,
        content: (
          <>
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
                  計算箱の「<Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
                  」を、
                  <br />
                  弁当箱でどう「<Strong>再現</Strong>」する？
                </>
              }
            />
            <P>
              ラムダ村の村人たちは、計算箱の「<Strong>繰り返しの機能</Strong>{' '}
              <Emoji>🔁</Emoji>」を <Emoji>😈</Emoji>{' '}
              悪魔から返してもらうべく、弁当箱で繰り返しの機能を再現しようと頑張っていました。しかし…
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>
                        うーん、
                        <Em>
                          どんなに考えても、計算箱の「
                          <Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
                          」を弁当箱で再現することができない…
                        </Em>
                      </P>
                      <P>サヤちゃん、何か思いついた？</P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>サヤも、さっぱり分からないなあ…</P>
                    </>
                  )
                },
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>サヤちゃんでも分からないなんて…もうお手上げだ！</P>
                    </>
                  )
                }
              ]}
            />
            <P>
              すると、悩んでいる村人たちのもとに、悪魔の助手の <Emoji>🐶</Emoji>{' '}
              ミニオンがやってきました。
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        みなさん、なかなかお困りのようですね。よければ、
                        <Strong>ヒントを出しましょうか？</Strong>
                      </P>
                    </>
                  )
                },
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>おお、ミニオン！お願いだ、ヒントを教えてくれ！</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        分かりました、ではまず、計算箱の「
                        <Strong>条件分岐の機能</Strong> <Emoji>↕️</Emoji>
                        」について教えましょう。
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        「<Strong>条件分岐の機能</Strong> <Emoji>↕️</Emoji>
                        」だって？何だそりゃ？
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
        title: <>条件分岐の機能</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>まず、こちらの計算箱をご覧ください。</P>
                    </>
                  )
                }
              ]}
            />
            <R.Rhoa>
              「<Strong>条件分岐の機能</Strong> <Emoji>↕️</Emoji>」がある計算箱
            </R.Rhoa>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>なんだこれは？</P>
                      <Ul>
                        <UlLi>
                          左側に <InlineBorder type="falseCase" />{' '}
                          <InlineBorder type="condition" />{' '}
                          <InlineBorder type="trueCase" />{' '}
                          という3種類の印があり、
                        </UlLi>
                        <UlLi>
                          それぞれ <CustomEmoji type="blankNumberPink" />{' '}
                          <CustomEmoji type="blankNumberGrey" />{' '}
                          <CustomEmoji type="blankNumberPurple" />{' '}
                          が入っている。
                        </UlLi>
                      </Ul>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Strong>
                          それぞれの <CustomEmoji type="blankNumberPink" />{' '}
                          <CustomEmoji type="blankNumberGrey" />{' '}
                          <CustomEmoji type="blankNumberPurple" />{' '}
                          には数字を入れることができます。
                        </Strong>
                        同じ数字を入れても構いませんし、違う数字を入れても構いません。
                      </P>
                      <P>
                        具体例で説明したほうが分かりやすいと思うので、
                        <Strong>
                          <CustomEmoji type="blankNumberPink" />{' '}
                          <CustomEmoji type="blankNumberGrey" />{' '}
                          <CustomEmoji type="blankNumberPurple" />{' '}
                          に何か適当な数字を入れてみてください！
                        </Strong>
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        分かった。とりあえず、{' '}
                        <Strong>
                          上から順に <EmojiNumber number={1} />{' '}
                          <EmojiNumber number={2} /> <EmojiNumber number={3} />{' '}
                          を入れてみたよ。
                        </Strong>
                      </P>
                      <P>
                        これで、
                        <H args={{ name: 'play' }} />
                        を押すとどうなるのかな？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Iatt>
              <EmojiNumber number={1} /> <EmojiNumber number={2} />{' '}
              <EmojiNumber number={3} /> を入れてみた
            </R.Iatt>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        <EmojiNumber number={1} /> になった！
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>では、どうしてこうなったか説明しますね！</P>
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
            真ん中が <EmojiNumber number={0} /> かどうか
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
                      <P>
                        「<Strong>条件分岐の機能</Strong> <Emoji>↕️</Emoji>
                        」はまず、
                        <Strong>
                          <H
                            args={{
                              name: 'conditionSectionName',
                              type: 'condition'
                            }}
                          />{' '}
                          に入っている数字が <EmojiNumber number={0} /> かどうか
                        </Strong>
                        チェックします。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Vozu />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        <H
                          args={{
                            name: 'conditionSectionName',
                            type: 'condition'
                          }}
                        />{' '}
                        に入っている数字は <EmojiNumber number={2} /> なので、{' '}
                        <Strong>
                          <EmojiNumber number={0} /> ではないよ。
                        </Strong>
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        そうですね。このように真ん中が{' '}
                        <EmojiNumber number={0} /> ではない場合、
                        <Strong>
                          <H
                            args={{
                              name: 'conditionSectionName',
                              type: 'falseCase'
                            }}
                          />{' '}
                          に入っている数字が最終的に残るのです。
                        </Strong>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Rjfy />
            <ExpressionRunnerSeparator />
            <R.Rnug>
              <InlineBorder type="falseCase" /> に入っていた{' '}
              <EmojiNumber number={1} /> が残る
            </R.Rnug>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        なるほど、だから <EmojiNumber number={1} /> が残るのか！
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
        type: 'yesNoQuiz',
        title: (
          <>
            <H args={{ name: 'yesNoQuiz' }} />
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
                      <P>
                        では、もうひとつ例を紹介します。こちらは、
                        <H args={{ name: 'yesNoQuiz' }} />{' '}
                        にしてみましょう。こちらの計算箱をご覧ください。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Plbv />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <InlineHeader>質問:</InlineHeader> これを
                        <H args={{ name: 'play' }} />{' '}
                        すると、最終的に以下のようになるでしょうか？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Kizi />
            <YesNoButtons answer="no" />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'theAnswerIs', isYes: false }} />
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
                      <P>
                        <H
                          args={{
                            name: 'theAnswerIs',
                            isYes: false,
                            sentence: true
                          }}
                        />
                        残るのは <EmojiNumber number={4} /> ではなく、
                        <EmojiNumber number={5} /> になります。
                        <H args={{ name: 'pressPlay' }} />
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Kmyl />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>どうしてこうなったか説明しましょう。</P>
                      <P>
                        こちらも、真ん中の数字が <EmojiNumber number={0} />{' '}
                        かどうかチェックします。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Qcmh />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        今回は真ん中が <EmojiNumber number={0} />{' '}
                        ですね。この場合は前回と逆で、
                        <Strong>
                          <H
                            args={{
                              name: 'conditionSectionName',
                              type: 'trueCase'
                            }}
                          />{' '}
                          に入っている数字が最終的に残ります。
                        </Strong>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Guhy />
            <ExpressionRunnerSeparator />
            <R.Seie>
              <InlineBorder type="trueCase" /> に入っていた{' '}
              <EmojiNumber number={5} /> が残る
            </R.Seie>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>なるほど…</P>
                    </>
                  )
                }
              ]}
            />
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
            <P>
              まとめると、この「
              <Strong>条件分岐の機能</Strong> <Emoji>↕️</Emoji>
              」の法則は以下の通りです。
            </P>
            <R.Rhoa>
              「<Strong>条件分岐の機能</Strong> <Emoji>↕️</Emoji>」がある計算箱
            </R.Rhoa>
            <P>
              <Em>
                まず、
                <H
                  args={{ name: 'conditionSectionName', type: 'condition' }}
                />{' '}
                の中にある <CustomEmoji type="blankNumberGrey" /> が{' '}
                <EmojiNumber number={0} /> かどうかチェックします。
              </Em>
            </P>
            <Ul>
              <UlLi>
                <Em>
                  もし <EmojiNumber number={0} /> なら、{' '}
                  <H
                    args={{ name: 'conditionSectionName', type: 'trueCase' }}
                  />{' '}
                  の中にある <CustomEmoji type="blankNumberPurple" />{' '}
                  が残ります。
                </Em>
              </UlLi>
              <UlLi>
                <Em>
                  もし <EmojiNumber number={0} /> でなければ、
                  <H
                    args={{ name: 'conditionSectionName', type: 'falseCase' }}
                  />{' '}
                  の中にある <CustomEmoji type="blankNumberPink" /> が残ります。
                </Em>
              </UlLi>
            </Ul>
            <EmojiSeparator emojis={['🔢', '↕️', '0️⃣']} />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        なるほど、「
                        <Em>
                          真ん中が <EmojiNumber number={0} /> かどうか？
                        </Em>
                        」という「
                        <Strong>条件</Strong>」によって上下に「
                        <Strong>分岐</Strong>」するから、「
                        <Strong>条件分岐の機能</Strong> <Emoji>↕️</Emoji>
                        」なのか。
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
        title: <>繰り返しの機能と関連がある</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        この「
                        <Strong>条件分岐の機能</Strong> <Emoji>↕️</Emoji>
                        」は、
                        <Strong>
                          実は計算箱にもともと備わっていた隠れ機能
                        </Strong>
                        なんです。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              emojis={['✨', '↕️', '✨']}
              description={<>計算箱に備わっていた隠れ機能</>}
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        へー、そんなこと、ラムダ村の俺らは誰も知らなかったぞ！
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        そうなんです。「
                        <Strong>条件分岐の機能</Strong> <Emoji>↕️</Emoji>
                        」は
                        <Em>
                          あまり役に立たないので、いつしか忘れ去られてしまった
                        </Em>
                        のです。
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        たしかに、「
                        <Em>
                          真ん中が <EmojiNumber number={0} /> かどうか？
                        </Em>
                        」をチェックできても、何の役にも立たなさそうだけど…
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        しかし、この「
                        <Strong>条件分岐の機能</Strong> <Emoji>↕️</Emoji>
                        」は、
                        <Em>
                          実は「
                          <Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
                          」と関連がある
                        </Em>
                        のです。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <Emoji>↕️</Emoji>,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>🔁</Emoji>
              ]}
              description={
                <>
                  「<Strong>条件分岐の機能</Strong> <Emoji>↕️</Emoji>
                  」は、
                  <br />「<Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
                  」と関連がある
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>え、そうなの？</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        はい。ここが重要なのですが…村人のみなさんは「
                        <Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
                        」を弁当箱で再現できずに苦戦していましたよね。
                      </P>
                    </>
                  )
                },
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>うん、どうしていいか全然分からない…</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        実は、まず「
                        <Strong>条件分岐の機能</Strong> <Emoji>↕️</Emoji>
                        」を弁当箱で再現することができれば、「
                        <Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
                        」を弁当箱で再現できてしまうんです！
                      </P>
                      <P>その理由は、また後に説明しますが…</P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <Emoji>↕️</Emoji>,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>🍱</Emoji>,
                <Emoji>❓</Emoji>
              ]}
              description={
                <>
                  「<Strong>条件分岐の機能</Strong> <Emoji>↕️</Emoji>
                  」を
                  <br />
                  弁当箱で再現できれば…
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
                  「<Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
                  」も
                  <br />
                  弁当箱で再現できる！
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>なんと！</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        だからまずは、「<Strong>条件分岐の機能</Strong>{' '}
                        <Emoji>↕️</Emoji>
                        」を弁当箱で再現してみてください！
                      </P>
                      <P>
                        これが解ければ、「<Strong>繰り返しの機能</Strong>{' '}
                        <Emoji>🔁</Emoji>
                        」を弁当箱で再現するのに一歩近づきますよ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Rhoa>
              「<Strong>条件分岐の機能</Strong> <Emoji>↕️</Emoji>」を…
            </R.Rhoa>
            <ExpressionRunnerSeparator />
            <EmojiSeparator
              emojis={['❓', '🍱', '❓']}
              description={
                <>
                  <Strong>弁当箱で再現できたら…</Strong>
                </>
              }
            />
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              「<Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
              」を
              <br />
              再現するのに一歩近づく！
            </ExpressionRunnerCaptionOnly>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>そうか。よーし、やってみよう！</P>
                    </>
                  )
                }
              ]}
            />
            <P>
              というわけで、次のページでは、「<Strong>条件分岐の機能</Strong>{' '}
              <Emoji>↕️</Emoji>」を弁当箱で再現してみます。次に進みましょう！
            </P>
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)
