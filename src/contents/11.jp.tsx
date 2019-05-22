import React from 'react'
import { Ul, UlLi, Em, P, Strong } from 'src/components/ContentTags'
import AER from 'src/components/Yc/AER'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EmojiForLetter from 'src/components/EmojiForLetter'
import Emoji from 'src/components/Emoji'
import EpisodeCardList from 'src/components/EpisodeCardList'
import EmojiWithText from 'src/components/EmojiWithText'
import YesNoButtons from 'src/components/YesNoButtons'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import H from 'src/components/H'
import { InlineEmojiBoxesForQuestion } from 'src/components/Yc/InlineEmojiBoxes'
import BottomRightBadge from 'src/components/Yc/BottomRightBadge'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: (
          <>
            <EmojiWithText letter="v" />
            の入った
            <H args={{ name: 'bentoBox', skipEmoji: true }} />
          </>
        ),
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              早速、
              <H args={{ name: 'lookAtThisBentoBox' }} />。
            </P>
            {AER.wbpx}
            <P>注目ポイントはふたつあります:</P>
            <Ul>
              <UlLi>
                <Em>
                  一番上に
                  <Strong>
                    <EmojiWithText letter="v" />
                  </Strong>
                  が入っています。
                </Em>
              </UlLi>
              <UlLi>
                <Em>
                  <InlineEmojiBoxesForQuestion />
                  の部分には、料理が「<Strong>ひとつだけ</Strong>」入ります。
                </Em>
              </UlLi>
            </Ul>
          </>
        )
      },
      {
        title: (
          <>
            <InlineEmojiBoxesForQuestion size="md" /> に何か入れてみる
          </>
        ),
        content: (
          <>
            <P>
              とりあえず、
              <EmojiWithText letter="c" />
              を<InlineEmojiBoxesForQuestion />
              に入れてみました。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.gszp}
            <P>
              <InlineEmojiBoxesForQuestion />
              に入っていた
              <Strong>
                <EmojiWithText letter="c" />
              </Strong>
              が最後に残りますね。
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiForLetter letter="c" />,
                <Emoji>➡️</Emoji>,
                <EmojiForLetter letter="c" />
              ]}
            />
            <P>
              <EmojiWithText letter="d" />
              を<InlineEmojiBoxesForQuestion />
              に入れてみたらどうでしょう？
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.kntz}
            <P>
              今回も、
              <InlineEmojiBoxesForQuestion />
              に入っていた
              <Strong>
                <EmojiWithText letter="d" />
              </Strong>
              が最後に残りました。
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiForLetter letter="d" />,
                <Emoji>➡️</Emoji>,
                <EmojiForLetter letter="d" />
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
            <P>では、ここで質問です！</P>
            {AER.wbpx}
            <P>
              <H args={{ name: 'question' }} />
            </P>
            <Ul>
              <UlLi>
                こちらの
                <H args={{ name: 'bentoBox', short: true }} />の
                <Strong>
                  <InlineEmojiBoxesForQuestion />
                  に料理をひとつだけ入れて
                  <H args={{ name: 'play' }} />
                  すると
                </Strong>
                、
              </UlLi>
              <UlLi>
                最終的にかならず
                <Strong>
                  <InlineEmojiBoxesForQuestion />
                  に入れた料理が残る
                </Strong>
                。<H args={{ name: 'yesOrNo' }} />
              </UlLi>
              <YesNoButtons answer="no" tooHard />
            </Ul>
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
            <P>
              <Strong>
                <H args={{ name: 'theAnswerIs', isYes: false }} />
                でした。
              </Strong>
            </P>
            <P>
              <Strong>
                <InlineEmojiBoxesForQuestion />に<EmojiWithText letter="b" />
                を入れる
              </Strong>
              のがポイントです。
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiForLetter letter="b" />,
                <Emoji>🤔</Emoji>,
                <InlineEmojiBoxesForQuestion size="md" />
              ]}
            />
            <P>
              <InlineEmojiBoxesForQuestion />に<EmojiWithText letter="b" />
              を入れてみると下のようになります。
              <H args={{ name: 'pressFastForward' }} />{' '}
            </P>
            {AER.bmms}
            <P>
              なんと、最後に
              <Strong>
                <EmojiWithText letter="v" />
              </Strong>
              が残りました！
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiForLetter letter="v" />,
                <Emoji>🥳</Emoji>,
                <EmojiForLetter letter="v" />
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
              こちらの
              <H args={{ name: 'bentoBox', short: true }} />
              の…
            </P>
            {AER.wbpx}
            <Ul>
              <UlLi>
                <Em>
                  <InlineEmojiBoxesForQuestion />に
                  <Strong>
                    <EmojiWithText letter="b" />
                  </Strong>
                  を入れた場合、
                  <Strong>
                    <EmojiWithText letter="v" />
                  </Strong>
                  が残る。
                </Em>
              </UlLi>
              <UlLi>
                <Em>
                  <InlineEmojiBoxesForQuestion />
                  にそれ以外を入れた場合、
                  <InlineEmojiBoxesForQuestion />
                  に入れた料理が残る。
                </Em>
              </UlLi>
            </Ul>
            <P>でも、どうしてこうなったのでしょう？</P>
          </>
        )
      },
      {
        title: (
          <>
            <BottomRightBadge inline bottomRightBadgeType="callArg" />と
            <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
            が両方とも
            <EmojiWithText letter="b" />
            になるから
          </>
        ),
        content: (
          <>
            <EmojiSeparator
              nodes={[
                <BottomRightBadge inline bottomRightBadgeType="callArg" />,
                <EmojiForLetter letter="b" />,
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              ]}
            />
            <P>
              理由は、
              <InlineEmojiBoxesForQuestion />に
              <Strong>
                <EmojiWithText letter="b" />
              </Strong>
              を入れた場合、
              <BottomRightBadge inline bottomRightBadgeType="callArg" />と
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />が
              <Strong>
                両方とも
                <Strong>
                  <EmojiWithText letter="b" />
                </Strong>
                になるから
              </Strong>
              です。
            </P>
            {AER.gmcn}
            <P>
              すると途中で
              <BottomRightBadge inline bottomRightBadgeType="funcArg" />と
              <BottomRightBadge inline bottomRightBadgeType="funcBound" />
              が両方とも
              <EmojiWithText letter="b" />
              になり…(
              <H args={{ name: 'pressFastForward', skipColon: true }} />)
            </P>
            {AER.vpjw}
            <P>
              最後に
              <EmojiWithText letter="v" />
              が残るのです。(
              <H args={{ name: 'pressFastForward', skipColon: true }} />)
            </P>
            {AER.kjyi}
          </>
        )
      },
      {
        title: (
          <>
            <BottomRightBadge inline bottomRightBadgeType="callArg" />と
            <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
            が違うとどうなるか
          </>
        ),
        content: (
          <>
            <P>
              それ以外の料理(たとえば
              <EmojiWithText letter="c" />
              )を
              <InlineEmojiBoxesForQuestion />
              に入れた場合、
              <Strong>
                <BottomRightBadge inline bottomRightBadgeType="callArg" />と
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                が異なります。
              </Strong>
            </P>
            {AER.dpst}
            <P>
              すると先ほどと違い、途中で
              <BottomRightBadge inline bottomRightBadgeType="funcArg" />と
              <BottomRightBadge inline bottomRightBadgeType="funcBound" />
              が同じにならず…(
              <H args={{ name: 'pressFastForward', skipColon: true }} />)
            </P>
            {AER.xhwx}
            <P>
              最初に
              <InlineEmojiBoxesForQuestion />
              に入れた
              <EmojiWithText letter="c" />
              が残るのです。(
              <H args={{ name: 'pressFastForward', skipColon: true }} />)
            </P>
            {AER.ttvy}
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
                <BottomRightBadge inline bottomRightBadgeType="callArg" />と
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                に同じ料理があるかどうかで、結果が変わることがある。
              </Strong>
            </P>
            <EmojiSeparator
              nodes={[
                <BottomRightBadge inline bottomRightBadgeType="callArg" />,
                <Emoji>🆚</Emoji>,
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              ]}
            />
            <P>
              先ほどの
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              だと、
            </P>
            {AER.wbpx}
            <P>
              <Em>
                <InlineEmojiBoxesForQuestion />に
                <Strong>
                  <EmojiWithText letter="b" />
                </Strong>
                を入れた場合、
                <BottomRightBadge inline bottomRightBadgeType="callArg" />と
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />が
                <Strong>同じになる。</Strong>
              </Em>
            </P>
            {AER.gmcn}
            <P>
              <Em>
                <InlineEmojiBoxesForQuestion />
                にそれ以外を入れた場合、
                <BottomRightBadge inline bottomRightBadgeType="callArg" />と
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />が
                <Strong>異なる。</Strong>
              </Em>
            </P>
            {AER.dpst}
            <P>
              だから、<Strong>それぞれ違う結果になる。</Strong>
            </P>
            <Ul>
              <UlLi>
                <InlineEmojiBoxesForQuestion />に
                <Strong>
                  <EmojiWithText letter="b" />
                </Strong>
                を入れた場合、
                <Strong>
                  <EmojiWithText letter="v" />
                </Strong>
                が残る。
              </UlLi>
              <UlLi>
                <InlineEmojiBoxesForQuestion />
                にそれ以外を入れた場合、
                <InlineEmojiBoxesForQuestion />
                に入れた料理が残る。
              </UlLi>
            </Ul>
          </>
        )
      },
      {
        title: <>何か問題でも？</>,
        content: (
          <>
            <P>
              <BottomRightBadge inline bottomRightBadgeType="callArg" />と
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              に同じ料理があるかどうかで、結果が変わる
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              があることがわかりました。
            </P>
            <P>
              でも、「<Em>それで何か問題でもあるの？</Em>
              」と思う方がいらっしゃるかもしれません。
            </P>
            <EmojiSeparator
              nodes={[
                <BottomRightBadge inline bottomRightBadgeType="callArg" />,
                <Emoji>🤔</Emoji>,
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              ]}
            />
            <P>
              というわけで次のページでは、
              <Em>
                結果が変わることによってどんな問題が発生するのか、以前紹介した
                <Strong>
                  <H args={{ name: 'bentoBox', short: true }} />
                  の暗号
                </Strong>
                を用いて解説していきます！
              </Em>
            </P>
            <YcNextLessonButton />
          </>
        )
      }
    ]}
  />
)
