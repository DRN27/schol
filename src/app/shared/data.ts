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
          question: 'к..нава',
          correct: 'а',
          fullAnswer: 'кАнава'
        },
        {
          question: 'н..жык',
          correct: 'о',
          fullAnswer: 'нОжык'
        },
        {
          question: 'тк..ніна',
          correct: 'а',
          fullAnswer: 'ткАніна'
        },
        {
            question: 'ш..птаць',
            correct: 'а',
            fullAnswer: 'шАптаць'
        },
        {
            question: 'вал..шкі',
            correct: 'о',
            fullAnswer: 'валОшкі'
        },
        {
            question: 'галас..к',
            correct: 'о',
            fullAnswer: 'галасОк'
        },
        {
            question: 'ср..бра',
            correct: 'э',
            fullAnswer: 'срЭбра'
        },
        {
            question: 'баб..вы',
            correct: 'о',
            fullAnswer: 'бабОвы'
        },
        {
            question: 'г..лінка',
            correct: 'а',
            fullAnswer: 'гАлінка'
        },
        {
            question: 'сваб..да',
            correct: 'о',
            fullAnswer: 'свабОда'
          }
      ],
      answers: ['о', 'э', 'а']
    },
    {
      name: 'вариант 2',
      shortcut: '2',
      words: [
        {
          question: 'кал..ссе',
          correct: 'о',
          fullAnswer: 'калОссе'
        },
        {
          question: 'скарб..нка',
          correct: 'о',
          fullAnswer: 'скарбОнка'
        },
        {
          question: 'н..пітак',
          correct: 'а',
          fullAnswer: 'нАпітак'
        },
        {
            question: 'па..т',
            correct: 'э',
            fullAnswer: 'паЭт'
        },
        {
            question: 'сач..к',
            correct: 'о',
            fullAnswer: 'сачОк'
        },
        {
            question: 'хабат..к',
            correct: 'о',
            fullAnswer: 'хабатОк'
        },
        {
            question: 'М..зыр',
            correct: 'о',
            fullAnswer: 'МОзыр'
        },
        {
            question: 'н..сенне',
            correct: 'а',
            fullAnswer: 'нАсенне'
        },
        {
            question: 'тап..ля',
            correct: 'о',
            fullAnswer: 'тапОля'
        },
        {
            question: 'гар..шак',
            correct: 'о',
            fullAnswer: 'гарОшак'
        }
      ],
      answers: ['о', 'э', 'а']
    },
    {
        name: 'вариант 3',
        shortcut: '3',
        words: [
          {
            question: 'маліна..ка',
            correct: 'ў',
            fullAnswer: 'малінаЎка'
          },
          {
            question: 'д..жы',
            correct: 'у',
            fullAnswer: 'дУжы'
          },
          {
            question: 'п..шысты',
            correct: 'у',
            fullAnswer: 'пУшысты'
          },
          {
              question: 'морка..ка',
              correct: 'ў',
              fullAnswer: 'моркаЎка'
          },
          {
              question: 'гр..ша',
              correct: 'у',
              fullAnswer: 'грУша'
          },
          {
              question: 'пра..да',
              correct: 'ў',
              fullAnswer: 'праЎда'
          },
          {
              question: 'с..зор’е',
              correct: 'у',
              fullAnswer: 'сУзор’е'
          },
          {
              question: 'смо..ж',
              correct: 'ў',
              fullAnswer: 'смоЎж'
          },
          {
              question: 'ф..тбол',
              correct: 'у',
              fullAnswer: 'фУтбол'
          },
          {
              question: 'ло..ка',
              correct: 'ў',
              fullAnswer: 'лоЎка'
          }
        ],
        answers: ['у', 'ў']
      },
      {
        name: 'вариант 4',
        shortcut: '4',
        words: [
          {
            question: 'гр..па',
            correct: 'у',
            fullAnswer: 'грУпа'
          },
          {
            question: 'ра..ніна',
            correct: 'ў',
            fullAnswer: 'раЎніна'
          },
          {
            question: 'буда..нік',
            correct: 'ў',
            fullAnswer: 'будаЎнік'
          },
          {
              question: 'г..рбы',
              correct: 'у',
              fullAnswer: 'гУрбы'
          },
          {
              question: 'ішо..',
              correct: 'ў',
              fullAnswer: 'ішоЎ'
          },
          {
              question: 'роз..м',
              correct: 'у',
              fullAnswer: 'розУм'
          },
          {
              question: 'вучы..',
              correct: 'ў',
              fullAnswer: 'вучыЎ'
          },
          {
              question: 'гуля..',
              correct: 'ў',
              fullAnswer: 'гуляЎ'
          },
          {
              question: 'саста..',
              correct: 'ў',
              fullAnswer: 'састаЎ'
          },
          {
              question: 'м..жнасць',
              correct: 'у',
              fullAnswer: 'мУжнасць'
          }
        ],
        answers: ['у', 'ў']
      }
  ]
}
