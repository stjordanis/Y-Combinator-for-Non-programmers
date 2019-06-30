import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import EmojiNumber from 'src/components/EmojiNumber'
import {
  Ul,
  UlLi,
  P,
  Strong,
  Ol,
  OlLi,
  Em,
  Hr
} from 'src/components/ContentTags'
import H from 'src/components/H'
import {
  InlineEmojiBoxesForQuestion,
  InlineEmojiBoxesForCondition
} from 'src/components/InlineEmojiBoxes'
import EmojiSeparator from 'src/components/EmojiSeparator'
import TopRightBadge from 'src/components/TopRightBadge'
import Emoji from 'src/components/Emoji'
import EmojiWithText from 'src/components/EmojiWithText'
import EmojiForLetter from 'src/components/EmojiForLetter'
import EmojiForLetterWithTopRightBadgeWrapper from 'src/components/EmojiForLetterWithTopRightBadgeWrapper'
import { magicalVariableName } from 'src/lib/specialVariableNames'
import YesNoButtons from 'src/components/YesNoButtons'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import NextLessonButton from 'src/components/NextLessonButton'
import * as R from 'src/components/Runners'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>複雑な計算</>,
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              今回は、弁当箱を使った<Strong>複雑な計算</Strong>
              にチャレンジしていきます。まずは下の式をご覧下さい。
            </P>
            <EmojiSeparator size="sm" emojis={['3️⃣', '✖️', '2️⃣', '✖️', '1️⃣']} />
            <P>上の式は、</P>
            <Ul>
              <UlLi>
                <Strong>「3」からはじめて、</Strong>
              </UlLi>
              <UlLi>
                <Strong>どんどん「1」を引いた数を掛け算していき、</Strong>
              </UlLi>
              <UlLi>
                <Strong>最後に「1」を掛けるまで繰り返す</Strong>
              </UlLi>
            </Ul>
            <P>
              という計算です。(ちなみに、<Em>3 ✕ 2 ✕ 1 = 6</Em>です。)
            </P>
            <P>
              これを、たとえば「<Strong>4</Strong>
              」からはじめた場合は以下の通りになり、
            </P>
            <EmojiSeparator
              size="sm"
              emojis={['4️⃣', '✖️', '3️⃣', '✖️', '2️⃣', '✖️', '1️⃣']}
              description={
                <>
                  ちなみに、答えは「<Strong>24</Strong>」になります
                </>
              }
            />
            <P>
              「<Strong>5</Strong>
              」からはじめた場合は以下の通りになります。
            </P>
            <EmojiSeparator
              size="sm"
              emojis={['5️⃣', '✖️', '4️⃣', '✖️', '3️⃣', '✖️', '2️⃣', '✖️', '1️⃣']}
              description={
                <>
                  ちなみに、答えは「<Strong>120</Strong>」になります
                </>
              }
            />
            <P>
              このように、
              <H args={{ name: 'factorialDefinition' }} />
              という計算を、数学用語で「<Strong>階乗</Strong>
              」と呼びます。(豆知識なので、覚えなくても大丈夫です。)
            </P>
          </>
        )
      },
      {
        title: <>弁当箱で計算できる？</>,
        content: (
          <>
            <P>
              <H args={{ name: 'question' }} />
              では、
              <Strong>
                こういった計算を、弁当箱を使って行うことができるでしょうか？
              </Strong>
            </P>
            <P>
              たとえば、
              <Em>
                下の弁当箱の
                <InlineEmojiBoxesForQuestion />
                に何を入れたら、「<Strong>3 ✕ 2 ✕ 1</Strong>
                」を計算できるでしょう？
              </Em>
            </P>
            <R.Rreb />
            <P>
              また、「<Strong>4 ✕ 3 ✕ 2 ✕ 1</Strong>」「
              <Strong>5 ✕ 4 ✕ 3 ✕ 2 ✕ 1</Strong>」も計算できるでしょうか？
            </P>
            <R.Kqzn />
            <R.Aimh />
            <P>今回は、こういった計算ができるかどうか検証していきます！</P>
          </>
        )
      },
      {
        title: (
          <>
            弁当箱の
            <H args={{ name: 'witch' }} />
          </>
        ),
        content: (
          <>
            <P>
              はじめに、「
              <Strong>
                弁当箱の
                <H args={{ name: 'witch' }} />
              </Strong>
              」という「<Em>架空の</Em>」機能を紹介します。
            </P>
            <EmojiSeparator emojis={['✨', '🧙‍♀️', '✨']} />
            <P>
              なぜ「<Em>架空の</Em>」機能かというと、これは
              <Strong>実際には弁当箱に備わっていない機能だから</Strong>です。
            </P>
            <P>
              しかし、
              <Strong>もし仮にこの機能を使うことができるとしたら</Strong>
              、先ほどの
            </P>
            <EmojiSeparator size="sm" emojis={['3️⃣', '✖️', '2️⃣', '✖️', '1️⃣']} />
            <P>といった計算をカンタンに行うことができます。だから、</P>
            <Ol>
              <OlLi>
                <Em>まずは、この架空の機能を使って上の計算を行い</Em>
                (カンタン)、
              </OlLi>
              <OlLi>
                <Em>その後、この架空の機能を使わずに上の計算を行う</Em>(複雑)
              </OlLi>
            </Ol>
            <P>
              といった順番で説明していきます。この順番で説明したほうが、分かりやすいかなと判断した次第です。
              <Strong>とりあえず、読み進めてみてください！</Strong>
            </P>
          </>
        )
      },
      {
        title: (
          <>
            弁当箱の
            <H args={{ name: 'witch' }} />
          </>
        ),
        content: (
          <>
            <P>
              前置きはこれくらいにして、「
              <Strong>
                弁当箱の
                <H args={{ name: 'witch' }} />
              </Strong>
              」がどんな機能か説明しましょう。
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiForLetter letter={magicalVariableName} />,
                <Emoji>🧙‍♀️</Emoji>,
                <EmojiForLetter letter={magicalVariableName} />
              ]}
            />
            <P>
              次の弁当箱は、下に
              <H args={{ name: 'witch' }} />
              が、上に
              <EmojiNumber number={3} />
              が入っています。
            </P>
            <R.Zxux />
            <P>
              これを進めると、下の
              <H args={{ name: 'witch' }} />
              の部分が次のように変化します。
              <H args={{ name: 'pressNext' }} />
            </P>
            <R.Itzl />
            <P>ポイントは次の3点です:</P>
            <Ul>
              <UlLi>
                先ほどのように、弁当箱の下側に
                <H args={{ name: 'witch' }} />
                がある場合、必ずこのように変化します。
              </UlLi>
              <UlLi>
                上の
                <EmojiNumber number={3} />
                には何も起きません。
              </UlLi>
              <UlLi>
                変化後の弁当箱には
                <EmojiWithText letter={magicalVariableName} />や
                <EmojiNumber number={1} />
                があるのに加え、
                <Strong>
                  <H args={{ name: 'witch' }} />
                  がまた登場しているのに注目です
                </Strong>
                (黄色の部分)。
              </UlLi>
            </Ul>
            <R.Gtnr />
            <P>
              <Strong>この変化の法則がまるで魔法のよう</Strong>なので、弁当箱の
              <H args={{ name: 'witch' }} />
              と名付けた次第です。特に深い意味はありません。
            </P>
            <EmojiSeparator emojis={['✨', '🧙‍♀️', '✨']} />
            <P>
              <Strong>重要: この変化の法則を覚える必要はありません！</Strong>
              とりあえず読み進めてみてください。
            </P>
          </>
        )
      },
      {
        title: <>先に進めてみる</>,
        content: (
          <>
            <P>
              先に進めてみましょう。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            <R.Syfp />
            <P>
              ご覧の通り、
              <EmojiWithText letter={magicalVariableName} />
              が、上にあった
              <EmojiNumber number={3} />
              に変わりました。
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiForLetter letter={magicalVariableName} />,
                <Emoji>➡️</Emoji>,
                <EmojiNumber number={3} />
              ]}
            />
            <P>
              続きを見てみましょう。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            <R.Wdol />
            <P>
              ご覧の通り、
              <TopRightBadge inline topRightBadgeType="pred" />
              がついている
              <EmojiNumber number={3} />
              は、
              <EmojiNumber number={2} />
              になりました。
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiForLetterWithTopRightBadgeWrapper topRightBadgeType="pred">
                  <EmojiNumber number={3} />
                </EmojiForLetterWithTopRightBadgeWrapper>,
                <Emoji>➡️</Emoji>,
                <EmojiNumber number={2} />
              ]}
            />
            <P>
              続きを見てみましょう。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            <R.Luir />
            <P>
              ご覧の通り、条件分岐の弁当箱で、
              <InlineEmojiBoxesForCondition type="condition" /> の中にある暗号が
              <EmojiNumber number={2} />
              だったため、上にある{' '}
              <InlineEmojiBoxesForCondition type="falseCase" /> が残りました。
            </P>
          </>
        )
      },
      {
        title: <>ここまでの振り返り</>,
        type: 'summary',
        content: (
          <>
            <P>まだ途中ですが、ここまでを振り返ると、</P>
            <Ul>
              <UlLi>
                <Em>
                  一番上の数字が
                  <EmojiNumber number={3} />
                  から
                  <EmojiNumber number={2} />
                  になり、(黄色の部分)
                </Em>
              </UlLi>
              <UlLi>
                <Em highlightType="blue">
                  <H args={{ name: 'witch' }} />
                  の下に<Emoji>✖️</Emoji>
                  <EmojiNumber number={3} />
                  が追加されました。(青色の部分)
                </Em>
              </UlLi>
            </Ul>
            <R.Zxux />
            <ExpressionRunnerSeparator />
            <R.Ifxr />
            <P>
              ちなみに前回説明した通り、
              <Strong>
                <Emoji>✖️</Emoji>は掛け算の省略表記
              </Strong>
              です。
            </P>
          </>
        )
      },
      {
        title: (
          <>
            <EmojiNumber number={2} />
            から
            <EmojiNumber number={1} />へ
          </>
        ),
        content: (
          <>
            <P>
              さらに続きを見てみましょう。
              <H args={{ name: 'pressNext' }} />
            </P>
            <R.Vkpm />
            <P>
              またしても、
              <Em>
                <H args={{ name: 'witch' }} />
                の部分が前回と同じように変化しました。
              </Em>
              その後どうなるのか、
              <Em>
                <H args={{ name: 'fastForward' }} />
                して見てみましょう！
              </Em>
            </P>
            <R.Mihy />
            <P>
              <Em>
                一番上の数字が
                <EmojiNumber number={2} />
                から
                <EmojiNumber number={1} />
                になり、
              </Em>
              <Em highlightType="blue">
                <H args={{ name: 'witch' }} />
                の下に<Emoji>✖️</Emoji>
                <EmojiNumber number={2} />
                が追加されました。
              </Em>
            </P>
            <R.Dxum />
            <ExpressionRunnerSeparator />
            <R.Davn />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'witch' }} />
            が消える
          </>
        ),
        content: (
          <>
            <P>
              さらに続きを見てみましょう。
              <H args={{ name: 'pressNext' }} />
            </P>
            <R.Qltx />
            <P>
              以前と同じく、
              <H args={{ name: 'witch' }} />
              が変化しました。続いて、
              <H args={{ name: 'pressFastForward' }} />
            </P>
            <R.Zvet />
            <P>
              ここで、条件分岐の
              <Strong>
                <InlineEmojiBoxesForCondition type="condition" />{' '}
                の中にある暗号が
                <EmojiNumber number={0} />
                になりました。
              </Strong>
            </P>
            <R.Yvty />
            <P>
              ということは、条件分岐が行われた後に、
              <Strong>
                下側の
                <InlineEmojiBoxesForCondition type="trueCase" />
                に入っている
                <EmojiNumber number={1} />
                が残ります。
              </Strong>
            </P>
            <R.Umce />
            <P>
              すると、
              <Strong>
                <H args={{ name: 'witch' }} />
                が消え
              </Strong>
              、<Strong>残ったのは掛け算の省略表記</Strong>だけになりました。
              <H args={{ name: 'pressPlay' }} />
            </P>
            <R.Orhx />
            <P>
              つまり、これで <H args={{ name: 'inlineFactorial', start: 3 }} />
              の計算ができたわけです！
            </P>
            <EmojiSeparator emojis={['🎉', '🤗', '🎉']} />
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
              <Strong>
                つまり、
                <EmojiNumber number={3} />と<H args={{ name: 'witch' }} />
                が入っている弁当箱を
                <H args={{ name: 'fastForward' }} />
                すると、
              </Strong>
            </P>
            <R.Zxux />
            <P>
              途中で、下から上に{' '}
              <H args={{ name: 'inlineFactorial', start: 3 }} />{' '}
              という順番になり、
            </P>
            <R.Wqdb />
            <P>
              最終的に、
              <H args={{ name: 'factorialComputation', start: 3 }} />
              になります。
            </P>
            <R.Xtjt />
            <Hr />
            <P>
              下の
              <H args={{ name: 'fastForward' }} />
              を押すと、最初から最後まで超特急で見ることができます。
            </P>
            <R.Mnfh />
            <P>
              それでは、ここで
              <H args={{ name: 'yesNoQuiz' }} />
              をしてみましょう！
            </P>
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
            <P>
              今度は、上に
              <EmojiNumber number={4} />
              があります。
            </P>
            <R.Yklt />
            <P>
              <H args={{ name: 'whatHappensInTheMiddleQuestion' }} />
            </P>
            <R.Fsmk />
            <YesNoButtons answer="yes" tooHard />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'theAnswerIs', isYes: true }} />
          </>
        ),
        content: (
          <>
            <P>
              <H args={{ name: 'theAnswerIs', isYes: true, sentence: true }} />
              <H args={{ name: 'pressFastForward', pleaseWait: true }} />
            </P>
            <R.Peoq />
            <P>
              というわけで、途中で下から上に
              <H args={{ name: 'inlineFactorial', start: 4 }} />
              という順番になります。
            </P>
            <P>
              では、最後まで見てみましょう。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            <R.Nfkp />
            <P>
              というわけで、最終的に
              <H args={{ name: 'factorialComputation', start: 4 }} />
              になります。
            </P>
          </>
        )
      },
      {
        title: (
          <>
            <EmojiNumber number={5} />
            からはじめた場合
          </>
        ),
        content: (
          <>
            <P>
              時間の都合上省略しますが、
              <EmojiNumber number={5} />
              からはじめる場合も、途中で下から
              <H args={{ name: 'inlineFactorial', start: 5 }} />
              という順番になります。
            </P>
            <R.Fora />
            <ExpressionRunnerSeparator />
            <R.Eobj />
            <ExpressionRunnerSeparator />
            <R.Osqg />
            <P>
              そして、最終的に
              <H args={{ name: 'factorialComputation', start: 5 }} />
              になります。
            </P>
            <P>それでは、まとめに入りましょう！</P>
          </>
        )
      },
      {
        type: 'summary',
        title: (
          <>
            <H args={{ name: 'witch' }} />
            のまとめ
          </>
        ),
        content: (
          <>
            <P>
              「
              <Strong>
                弁当箱の
                <H args={{ name: 'witch' }} />
              </Strong>
              」を使うと、
              <H args={{ name: 'factorialDefinition' }} />
              という計算を行うことができます。
            </P>
            <R.Vrwt />
            <ExpressionRunnerSeparator />
            <EmojiSeparator
              size="sm"
              emojis={['3️⃣', '✖️', '2️⃣', '✖️', '1️⃣']}
              description={
                <>
                  ちなみに、答えは「<Strong>6</Strong>」になります
                </>
              }
            />
            <R.Lodr />
            <ExpressionRunnerSeparator />
            <EmojiSeparator
              size="sm"
              emojis={['4️⃣', '✖️', '3️⃣', '✖️', '2️⃣', '✖️', '1️⃣']}
              description={
                <>
                  ちなみに、答えは「<Strong>24</Strong>」になります
                </>
              }
            />
            <R.Fjyk />
            <ExpressionRunnerSeparator />
            <EmojiSeparator
              size="sm"
              emojis={['5️⃣', '✖️', '4️⃣', '✖️', '3️⃣', '✖️', '2️⃣', '✖️', '1️⃣']}
              description={
                <>
                  ちなみに、答えは「<Strong>120</Strong>」になります
                </>
              }
            />
            <P>上側にどんな暗号を入れても、</P>
            <R.Miez />
            <P>途中で以下のような形になるのがポイントです。</P>
            <R.Fapu />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'witch' }} />
            を使わずにできるか？
          </>
        ),
        content: (
          <>
            <P>
              復習になりますが、「
              <Strong>
                弁当箱の
                <H args={{ name: 'witch' }} />
              </Strong>
              」は、
              <H args={{ name: 'witch' }} />
              の部分が次のように変化する機能です。この変化が、先ほどの計算を可能にしているわけです。
            </P>
            <R.Xjae />
            <ExpressionRunnerSeparator />
            <R.Xsve />
            <P>
              しかし、冒頭でも書いた通り、「
              <Strong>
                弁当箱の
                <H args={{ name: 'witch' }} />
              </Strong>
              」は<Strong>架空の機能</Strong>
              で、実際には弁当箱に備わっていない機能です。
            </P>
            <EmojiSeparator emojis={['❌', '🧙‍♀️', '❌']} />
            <P>
              繰り返しますが、「
              <Em>
                もし仮に
                <H args={{ name: 'witch' }} />
                の機能を使うことができたら、
                <H args={{ name: 'inlineFactorial', start: 3 }} />
                といった計算をカンタンに行うことができる
              </Em>
              」から、この
              <H args={{ name: 'witch' }} />
              の機能を紹介したまでなのです。
            </P>
            <P>
              <Em>
                <H args={{ name: 'witch' }} />
                を使うのは、いわばズルをするようなもの。
              </Em>
              従来の弁当箱の機能だけで、正々堂々とやるのが理想です。
            </P>
            <P>
              <Strong>
                では、
                <H args={{ name: 'witch' }} />
                を使わずに、従来の弁当箱の機能だけを使って
                <H args={{ name: 'inlineFactorial', start: 3 }} />
                といった計算を行うには、どうすればいいのでしょうか？
              </Strong>
            </P>
            <EmojiSeparator emojis={['❓', '🤔', '❓']} />
          </>
        )
      },
      {
        title: <>答えは上級最後のページで！</>,
        content: (
          <>
            <P>
              答えは、次の上級最後のページで紹介します。ここでついに、タイトルにもある「
              <Strong>
                魔法の
                <H args={{ name: 'yCombinator' }} />
              </Strong>
              」が登場します。
            </P>
            <EmojiSeparator emojis={['✨', '🤗', '✨']} />
            <P>
              ここまでお付き合いくださり、ありがとうございます。
              <Em>
                次の上級最後のページの後は、もうエピローグしか残っていません。
              </Em>
              あと少しでゴールです！
            </P>
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)