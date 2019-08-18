import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Em, Strong, Ul, UlLi } from 'src/components/ContentTags'
import CustomEmoji from 'src/components/CustomEmoji'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiNumber from 'src/components/EmojiNumber'
import Emoji from 'src/components/Emoji'
import EmojiForLetter from 'src/components/EmojiForLetter'
import H from 'src/components/H'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
// import YesNoButtons from 'src/components/YesNoButtons'
// import ExpressionRunnerButton from 'src/components/ExpressionRunnerButton'
import * as R from 'src/components/Runners'
// import EmojiWithText from 'src/components/EmojiWithText'
// import EmojiForLetter from 'src/components/EmojiForLetter'
// import NextLessonButton from 'src/components/NextLessonButton'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>問題の説明</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        では約束通り、
                        <Em>
                          これから出す問題に答えることができたら、計算箱を返してやろう！
                        </Em>
                      </P>
                      <P>
                        <Strong>この問題は非常に難しい</Strong>
                        から覚悟するんだな。ベンケイ、問題を説明するんだ！
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        わかりました。まず、
                        <H args={{ name: 'lookAtThisBentoBox' }} />。
                      </P>
                      <P>
                        <CustomEmoji type="questionFoodGrey" />{' '}
                        がたくさんありますが、それぞれの{' '}
                        <Strong>
                          <CustomEmoji type="questionFoodGrey" />{' '}
                          には何らかの料理が入ります。
                        </Strong>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Envj>
              それぞれの <CustomEmoji type="questionFoodGrey" /> には
              <br />
              何らかの料理が入る
            </R.Envj>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>何だか複雑そうな弁当箱だなあ…</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        そして、
                        <Strong>
                          それぞれの <CustomEmoji type="questionFoodGrey" />{' '}
                          に、ある法則に基づいて料理を入れると、
                          <H args={{ name: 'specialEffect' }} />
                          がある弁当箱になります。
                        </Strong>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jguj>
              それぞれの <CustomEmoji type="questionFoodGrey" /> に、
              <br />
              <Strong>ある法則に基づいて</Strong>料理を入れると、
              <br />
              <H args={{ name: 'specialEffect' }} />
              がある弁当箱になる
            </R.Jguj>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        背景に <Emoji>⭐️</Emoji> の模様がついた！
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        そうですね。背景にある <Emoji>⭐️</Emoji> の模様は単に、
                        <H args={{ name: 'specialEffect' }} />
                        があるということを表しているだけです。
                      </P>
                      <P>
                        繰り返しますが、
                        <Strong>
                          それぞれの <CustomEmoji type="questionFoodGrey" />{' '}
                          に、ある法則に基づいて料理を入れたときに限り
                        </Strong>
                        、<H args={{ name: 'specialEffect' }} />
                        がある弁当箱になります。
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        その
                        <H args={{ name: 'specialEffect' }} />
                        ってどういう効果なの？
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>これから説明しますね！</P>
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
            <EmojiNumber number={1} /> が <EmojiNumber number={2} /> になる
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
                        <H args={{ name: 'lookAtThisBentoBox' }} />:
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Fxde />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        前回の復習ですが、この弁当箱は、ぼくが計算箱に変換すると{' '}
                        <EmojiNumber number={1} /> になります。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Rbup>
              右下には <Emoji>🅰️</Emoji> がついた
              <EmojiForLetter letter="d" />
              が「<Strong>1個</Strong>」
              <br />
              → 計算箱に変換すると
              <EmojiNumber number={1} />
              になる
            </R.Rbup>
            <ExpressionRunnerSeparator />
            <R.Rnug />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        では上の弁当箱を、先ほどの
                        <H args={{ name: 'specialEffect' }} />
                        がある弁当箱と<Strong>合体させてみます</Strong>。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Fljg>
              <H args={{ name: 'specialEffect' }} />
              がある弁当箱と合体
            </R.Fljg>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        では、この弁当箱を「
                        <Strong>
                          <H args={{ name: 'runAndConertToMathbox' }} />
                        </Strong>
                        」するとどうなるか見てみましょう。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ezmz />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        <EmojiNumber number={2} /> になった！
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>そうなんです！つまり、</P>
                      <Ul>
                        <UlLi>
                          <Em>
                            <EmojiNumber number={1} /> に変換できる弁当箱と、
                          </Em>
                        </UlLi>
                        <UlLi>
                          <Em>
                            先ほどの
                            <H args={{ name: 'specialEffect' }} />
                            がある弁当箱を合体させて、
                          </Em>
                        </UlLi>
                        <UlLi>
                          <Em>
                            「<H args={{ name: 'runAndConertToMathbox' }} />
                            」すると、
                          </Em>
                        </UlLi>
                        <UlLi>
                          <Em>
                            結果は <EmojiNumber number={2} /> になる
                          </Em>
                        </UlLi>
                      </Ul>
                      <P>ということです。</P>
                    </>
                  )
                }
              ]}
            />
            <R.Jiua>
              <EmojiNumber number={1} /> に変換できる弁当箱と、
              <br />
              <H args={{ name: 'specialEffect' }} />
              がある弁当箱を合体させ…
            </R.Jiua>
            <ExpressionRunnerSeparator />
            <R.Pmdm>
              <H args={{ name: 'runAndConertToMathbox' }} />
              <br />
              すると、結果は <EmojiNumber number={2} /> になる
            </R.Pmdm>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        つまり大雑把に言えば、
                        <Strong>
                          <EmojiNumber number={1} /> が{' '}
                          <EmojiNumber number={2} /> になった
                        </Strong>
                        というわけです。
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
            <EmojiNumber number={2} /> が <EmojiNumber number={3} /> になる
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
                        続いて、
                        <H args={{ name: 'lookAtThisBentoBox' }} />。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ilvq />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        この弁当箱は、ぼくが計算箱に変換すると{' '}
                        <EmojiNumber number={2} /> になります。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Spga>
              右下には <Emoji>🅰️</Emoji> がついた
              <EmojiForLetter letter="f" />
              が「<Strong>2個</Strong>」
              <br />
              → 計算箱に変換すると
              <EmojiNumber number={2} />
              になる
            </R.Spga>
            <ExpressionRunnerSeparator />
            <R.Pmdm />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        この弁当箱も、
                        <Em>
                          先ほどの
                          <H args={{ name: 'specialEffect' }} />
                          がある弁当箱と合体させてみました。
                        </Em>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Akug>
              <H args={{ name: 'specialEffect' }} />
              がある弁当箱と合体
            </R.Akug>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        こちらを「
                        <Strong>
                          <H args={{ name: 'runAndConertToMathbox' }} />
                        </Strong>
                        」するとどうなるか確かめてみてください！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Vfdw />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        <EmojiNumber number={3} /> になった！
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>そうなんです！まとめると、以下のようになります。</P>
                    </>
                  )
                }
              ]}
            />

            <R.Aone>
              <EmojiNumber number={2} /> に変換できる弁当箱と、
              <br />
              <H args={{ name: 'specialEffect' }} />
              がある弁当箱を合体させ…
            </R.Aone>
            <ExpressionRunnerSeparator />
            <R.Qsoa>
              <H args={{ name: 'runAndConertToMathbox' }} />
              <br />
              すると、結果は <EmojiNumber number={3} /> になる
            </R.Qsoa>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        ざっくり言うと、今度は{' '}
                        <Strong>
                          <EmojiNumber number={2} /> が{' '}
                          <EmojiNumber number={3} /> になった
                        </Strong>
                        のです。
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
        title: <>1を足す効果</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        <Em>
                          <EmojiNumber number={1} /> が{' '}
                          <EmojiNumber number={2} /> になり、
                          <EmojiNumber number={2} /> が{' '}
                          <EmojiNumber number={3} /> になる
                        </Em>
                        ということは…
                      </P>
                      <P>
                        <Strong>実質、「1を足す」ことが行われている</Strong>
                        のかな？
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>その通りです。つまり、</P>
                      <Ul>
                        <UlLi>
                          <Em>
                            ある数字 <CustomEmoji type="blankNumber" />{' '}
                            に変換できる弁当箱と、
                          </Em>
                        </UlLi>
                        <UlLi>
                          <Em>
                            <H args={{ name: 'specialEffect' }} />
                            がある弁当箱を合体させ、
                          </Em>
                        </UlLi>
                        <UlLi>
                          <Em>
                            <H args={{ name: 'runAndConertToMathbox' }} />
                            すると、
                          </Em>
                        </UlLi>
                        <UlLi>
                          <Em>
                            結果は <CustomEmoji type="blankNumber" />{' '}
                            <Emoji>➕</Emoji> <EmojiNumber number={1} />{' '}
                            になるのです。
                          </Em>
                        </UlLi>
                      </Ul>
                    </>
                  )
                }
              ]}
            />
            <R.Qrgc>
              <CustomEmoji type="blankNumber" /> に変換できる弁当箱と、
              <br />
              <H args={{ name: 'specialEffect' }} />
              がある弁当箱を合体させ…
            </R.Qrgc>
            <ExpressionRunnerSeparator />
            <R.Jxvy>
              <H args={{ name: 'runAndConertToMathbox' }} />
              <br />
              すると、結果は <CustomEmoji type="blankNumber" />{' '}
              <Emoji>➕</Emoji> <EmojiNumber number={1} /> になる
            </R.Jxvy>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        ここで思い出してほしいのですが、
                        <Strong>
                          計算箱では、
                          <CustomEmoji type="plusOne" />{' '}
                          を使えば、「1を足す」計算を行うことができましたよね
                        </Strong>
                        。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Rviy>
              <Emoji>🎁</Emoji> 計算箱の場合
            </R.Rviy>
            <ExpressionRunnerSeparator />
            <R.Jxvy></R.Jxvy>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        すなわち、この <H args={{ name: 'specialEffect' }} />
                        がある弁当箱は…
                      </P>
                      <P>
                        <Strong>
                          計算箱における <CustomEmoji type="plusOne" />{' '}
                          と同じ「1を足す」効果を持っていると言えます。
                        </Strong>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jguj>
              この <H args={{ name: 'specialEffect' }} />
              がある弁当箱は…
            </R.Jguj>
            <R.Biit>
              <Strong>
                計算箱における、
                <CustomEmoji type="plusOne" /> と同じ
              </Strong>
            </R.Biit>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        なるほど。大雑把に言えば、
                        <H args={{ name: 'specialEffect' }} />
                        とはすなわち「<Strong>1を足す効果</Strong>
                        」ということか。
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
        title: <>計算箱を賭けた問題</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        では、ここで問題です。
                        <Strong>
                          この弁当箱に、どのような法則に基づいて{' '}
                          <CustomEmoji type="questionFoodGrey" />{' '}
                          に料理を入れると…
                        </Strong>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Envj>
              <Strong>
                どのような法則に基づいて <CustomEmoji type="questionFoodGrey" />{' '}
                に料理を入れると…
              </Strong>
            </R.Envj>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        先ほどのような、
                        <Strong>
                          「1を足す効果」がある弁当箱になるでしょう？
                        </Strong>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jguj>
              <Strong>「1を足す」効果がある弁当箱になる？</Strong>
            </R.Jguj>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Strong>
                          ある法則に基づいて{' '}
                          <CustomEmoji type="questionFoodGrey" />{' '}
                          に料理を入れた時に限り
                        </Strong>
                        、「1を足す効果」 がある弁当箱になります。
                        <Em>
                          それがどんな法則が、当ててみよう！という問題です。
                        </Em>
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Em>
                          この問題こそが、以前から話していた「難しい問題」だ。これを解けたら、約束通り計算箱を返してやろう！
                        </Em>
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
        title: <>試しに適当な料理を入れてみる</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>
                        うーん…
                        <Em>
                          問題を完全に理解できた自信がないし、どうやって解けばいいかサッパリ分からない！
                        </Em>
                      </P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      }
    ]}
  />
)
