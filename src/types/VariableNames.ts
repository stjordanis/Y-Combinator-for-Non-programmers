export type VariableNames =
  | 'a'
  | 'b'
  | 'c'
  | 'd'
  | 'e'
  | 'f'
  | 'g'
  | 'h'
  | 'i'
  | 'j'
  | 'k'
  | 'l'
  | 'm'
  | 'n'
  | 'o'
  | 'p'
  | 'q'
  | 'r'
  | 's'
  | 't'
  | 'u'
  | 'v'
  | 'w'
  | 'x'
  | 'y'
  | 'z'
  | 'A'
  | 'B'
  | 'shorthandNumber'
  | 'Amult'
  | 'Bsingle'
  | 'blankNumber'
  | 'blankNumberPlusOne'
  | 'shorthandFunc'
  | 'questionFoodGrey'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'blankNumberPink'
  | 'blankNumberGrey'
  | 'blankNumberPurple'
  | 'blankNumberRed'
  | 'blankNumberYellow'
  | 'blankNumberGreen'
  | 'bentoBox'
  | 'mathBox'
  | 'blank'

export interface VariableNamesWithAlphaConvertCount {
  name: VariableNames
  count: number
}
