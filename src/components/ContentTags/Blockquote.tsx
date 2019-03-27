import styled from '@emotion/styled'
import { colors, spaces } from 'src/lib/theme'

export const Blockquote = styled.blockquote`
  border-left: 0.5rem solid ${colors('purple100')};
  padding-left: 1rem;
  margin: 0 0 ${spaces(1)};
  color: ${colors('purple700')};
`
