import React from 'react'
import { Em, H3, P, Strong, Ul, UlLi } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode10 } from 'src/components/Yc/AllExpressionRunners'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import h from 'src/lib/h'

export default () => {
  let i = 0
  return (
    <>
      <H3>The {h('ycPlay')} Button</H3>
      <P>
        Because we’re now at an intermediate level, we have a new functionality
        for you: <Strong>the {h('ycPlay')} button</Strong>.
      </P>
      <P>
        <Em>Try pressing on {h('ycPlay')} below.</Em>
      </P>
      {episode10[i++]()}
      <P>It automatically advances the {h('ycBentoBox')} for you.</P>
      <EmojiSeparator emojis={['▶️', '🤗', '▶️']} />
      <P>
        Now, let’s talk about the <Strong>Secret Code</Strong>.
      </P>
      <H3>Secret Code</H3>
      <P>
        In this episode, I’ll show you some {h('ycBentoBox', true)}. Each one
        has associated <Strong>secret code</Strong> which follows a{' '}
        <Strong>pattern</Strong>.{' '}
      </P>
      <P>
        <Em>
          <Strong>Challenge:</Strong> I want you to figure out what the pattern
          is
        </Em>
        .
      </P>
      <EmojiSeparator emojis={['🔢', '🧐', '️🔢']} />
      <H3>Secret Code: Examples</H3>
      <P>
        This one has the secret code <Strong>0</Strong>:
      </P>
      {episode10[i++]()}
      <P>
        This one has the secret code <Strong>1</Strong>:
      </P>
      {episode10[i++]()}
      <P>
        This one has the secret code <Strong>2</Strong>:
      </P>
      {episode10[i++]()}
      <P>
        This one has the secret code <Strong>3</Strong>:
      </P>
      {episode10[i++]()}
      <P>Did you figure out the pattern? Let’s do a quiz!</P>
      <H3>Quiz: Guess the Secret Code</H3>
      <P>What’s the secret code of the following {h('ycBentoBox')}?</P>
      {episode10[i++]()}
      <EmojiSeparator emojis={['🤔', '🤔', '🤔']} />
      <H3>The Answer</H3>
      <P>
        <Strong>Answer:</Strong>{' '}
        <Em>
          The secret code is <Strong>5</Strong>
        </Em>
        .
      </P>
      <Ul>
        <UlLi>
          There are 2 kinds of dishes <Strong>A</Strong> and <Strong>B</Strong>{' '}
          (<Emoji size="mdlg">🍝</Emoji> and <Emoji size="mdlg">🍚</Emoji>
          ).
        </UlLi>
        <UlLi>
          <Strong>A:</Strong> Dishes in the <Strong>middle</Strong> cell and the{' '}
          <Strong>top right</Strong> cell (<Emoji size="mdlg">🍝</Emoji>
          ).
        </UlLi>
        <UlLi>
          <Strong>B:</Strong> Dishes in the <Strong>left</Strong> cell and the{' '}
          <Strong>remaining cells in the right</Strong>. (
          <Emoji size="mdlg">🍚</Emoji>
          ).
        </UlLi>
        <UlLi>
          <Em>
            The number of <Strong>B</Strong>
            ’s in the right-most cells is the <Strong>secret code</Strong> (
            <Emoji size="mdlg">🍚</Emoji> <Emoji size="mdlg">🍚</Emoji>{' '}
            <Emoji size="mdlg">🍚</Emoji> <Emoji size="mdlg">🍚</Emoji>{' '}
            <Emoji size="mdlg">🍚</Emoji> = <Strong>5</Strong>)
          </Em>
        </UlLi>
        <P>
          <Strong>Was it too easy?</Strong> Well ok, here’s something more
          challenging…
        </P>
        <EmojiSeparator emojis={['🔢', '🧐', '️🔢']} />
        <H3>Quiz: What will happen next?</H3>
        <P>
          Suppose we have the {h('ycBentoBox')} with the{' '}
          <Em>
            secret code <Strong>2</Strong>
          </Em>
          .
        </P>
        {episode10[i++]()}
        <P>
          <Strong>We’ll combine it</Strong> with the following {h('ycBentoBox')}
          :
        </P>
        {episode10[i++]()}
        <P>So it becomes:</P>
        {episode10[i++]()}
        <P>
          <Strong>Question:</Strong> What do you think will happen when you step
          through this until it’s {h('ycDone')}?
        </P>
        <P>
          <Strong>Hint:</Strong>{' '}
          <Em>
            the secret code changes from <Strong>2</Strong> to something new
          </Em>
          . What do you think will be the new secret code?
        </P>
        <YcNextLessonButton nextEpisodeNumber={9} />
      </Ul>
    </>
  )
}
