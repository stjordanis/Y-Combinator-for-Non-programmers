import { episodeTitles } from 'src/lib/titles'

const episodeEmojis: Record<keyof typeof episodeTitles | 0, string[]> = {
  0: ['🐶', '🙂', '😈', '👧🏻'],
  1: ['➕', '🔲', '➖'],
  2: ['🔁', '🔲', '🔁'],
  3: ['🍱', '😈', '🍱'],
  4: ['✅', '🍱', '💥'],
  5: ['3️⃣', '🍱', '3️⃣'],
  6: ['🍱', '🐶', '🔲'],
  7: ['➕', '🐶', '1️⃣'],
  8: ['😮', '👧🏻', '🐶'],
  9: ['❓', '👧🏻', '❓'],
  10: ['➖', '😈', '1️⃣'],
  11: ['0️⃣', '❓', '🔢'],
  12: ['0️⃣', '👧🏻', '🔢'],
  13: ['🍱', '➡️', '🔲'],
  14: ['✨', '🧙‍♀️', '✨'],
  15: ['➕', '🍱', '➖'],
  16: ['👨🏻‍🦳', '💭', '🍱']
}

export default episodeEmojis
