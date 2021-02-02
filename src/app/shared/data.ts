export interface Variant {
  name: string,
  shortcut: string,
  words: Word[],
  answers: Array<string>
}

export interface Answer {
    value: string,
    rightAnswersList: Array<string>
}

export interface Word {
  question: string,
  correct: string,
  fullAnswer: string,
  isRight?: boolean
}

export const data = {
  variants: [
    {
      name: 'вариант 1',
      shortcut: '1',
      words: [
        {
          question: 'zz_z',
          correct: 'z',
          fullAnswer: 'zzZz'
        },
        {
          question: 'xx_x',
          correct: 'x',
          fullAnswer: 'xxXx'
        },
        {
          question: 'c_cc',
          correct: 'c',
          fullAnswer: 'cCcc'
        }
      ],
      answers: ['z', 'x', 'c']
    },
    {
      name: 'вариант 2',
      shortcut: '2',
      words: [
        {
          question: 'zz_z',
          correct: 'z',
          fullAnswer: 'zZzz'
        },
        {
          question: 'xx_x',
          correct: 'x',
          fullAnswer: 'xxXx'
        },
        {
          question: 'c_cc',
          correct: 'c',
          fullAnswer: 'cCcc'
        }
      ],
      answers: ['z', 'x', 'c']
    }
  ]
}
