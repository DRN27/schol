export interface Task {
    task: string,
    variants: Variant[]
  }

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

export const data = [
    {
        task: 'А, О, Э',
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
            }
        ]
    },
    {
        task: 'У, Ў',
        variants: [
            {
                name: 'вариант 1',
                shortcut: '1',
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
                name: 'вариант 2',
                shortcut: '2',
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
    },
    {
        task: 'Е, Я',
        variants: [
            {
                name: 'вариант 1',
                shortcut: '1',
                words: [
                    {
                        question: 'сл..ды',
                        correct: 'я',
                        fullAnswer: 'слЯды'
                    },
                    {
                        question: 'з..мля',
                        correct: 'я',
                        fullAnswer: 'зЯмля'
                    },
                    {
                        question: 'в..сло',
                        correct: 'я',
                        fullAnswer: 'вЯсло'
                    },
                    {
                        question: 'с..стра',
                        correct: 'я',
                        fullAnswer: 'сЯстра'
                    },
                    {
                        question: 'св..тлафор',
                        correct: 'е',
                        fullAnswer: 'свЕтлафор'
                    },
                    {
                        question: 'дз..нёк',
                        correct: 'я',
                        fullAnswer: 'дзЯнёк'
                    },
                    {
                        question: 'м..талічны',
                        correct: 'е',
                        fullAnswer: 'мЕталічны'
                    },
                    {
                        question: 'л..док',
                        correct: 'я',
                        fullAnswer: 'лЯдок'
                    },
                    {
                        question: 'п..нёк',
                        correct: 'я',
                        fullAnswer: 'пЯнёк'
                    },
                    {
                        question: 'в..лікі',
                        correct: 'я',
                        fullAnswer: 'вЯлікі'
                    }
                    ],
                    answers: ['е', 'я']
            },
            {
                name: 'вариант 2',
                shortcut: '2',
                words: [
                    {
                        question: 'с..м’я',
                        correct: 'я',
                        fullAnswer: 'сЯм’я'
                    },
                    {
                        question: 'в..трык',
                        correct: 'е',
                        fullAnswer: 'вЕтрык'
                    },
                    {
                        question: 'с..ло',
                        correct: 'я',
                        fullAnswer: 'сЯло'
                    },
                    {
                        question: 'ц..нёк',
                        correct: 'я',
                        fullAnswer: 'цЯнёк'
                    },
                    {
                        question: 'гн..здо',
                        correct: 'я',
                        fullAnswer: 'гнЯздо'
                    },
                    {
                        question: 'л..савод',
                        correct: 'е',
                        fullAnswer: 'лЕсавод'
                    },
                    {
                        question: 'п..нсіянер',
                        correct: 'е',
                        fullAnswer: 'пЕнсіянер'
                    },
                    {
                        question: 'сц..жынка',
                        correct: 'я',
                        fullAnswer: 'сцЯжынка'
                    },
                    {
                        question: 'высв..тліць',
                        correct: 'е',
                        fullAnswer: 'высвЕтліць'
                    },
                    {
                        question: 'з..ляніна',
                        correct: 'е',
                        fullAnswer: 'зЕляніна'
                    }
                    ],
                    answers: ['е', 'я']
            },
            {
                name: 'вариант 3',
                shortcut: '3',
                words: [
                    {
                        question: 'в..ласіпед',
                        correct: 'е',
                        fullAnswer: 'вЕласіпед'
                    },
                    {
                        question: 'сл..ды',
                        correct: 'я',
                        fullAnswer: 'слЯды'
                    },
                    {
                        question: 'сц..жка',
                        correct: 'е',
                        fullAnswer: 'сцЕжка'
                    },
                    {
                        question: 'в..сна',
                        correct: 'я',
                        fullAnswer: 'вЯсна'
                    },
                    {
                        question: 'м..тла',
                        correct: 'я',
                        fullAnswer: 'мЯтла'
                    },
                    {
                        question: 'п..раказ',
                        correct: 'е',
                        fullAnswer: 'пЕраказ'
                    },
                    {
                        question: 'п..развон',
                        correct: 'е',
                        fullAnswer: 'пЕразвон'
                    },
                    {
                        question: 'асв..тніца',
                        correct: 'е',
                        fullAnswer: 'асвЕтніца'
                    },
                    {
                        question: 'кл..новы',
                        correct: 'я',
                        fullAnswer: 'клЯновы'
                    },
                    {
                        question: 'н..пагода',
                        correct: 'е',
                        fullAnswer: 'нЕпагода'
                    }
                    ],
                    answers: ['е', 'я']
            }
        ]
    },
    {
        task: 'Д, ДЗ',
        variants: [
            {
                name: 'вариант 1',
                shortcut: '1',
                words: [
                    {
                        question: '..яўчынка',
                        correct: 'дз',
                        fullAnswer: 'ДЗяўчынка'
                    },
                    {
                        question: 'гаспа..ыня',
                        correct: 'д',
                        fullAnswer: 'гаспаДыня'
                    },
                    {
                        question: 'ня..еля',
                        correct: 'дз',
                        fullAnswer: 'няДЗеля'
                    },
                    {
                        question: 'брыга..а',
                        correct: 'д',
                        fullAnswer: 'брыгаДа'
                    },
                    {
                        question: '..ядуля',
                        correct: 'дз',
                        fullAnswer: 'ДЗядуля'
                    },
                    {
                        question: 'сера..а',
                        correct: 'д',
                        fullAnswer: 'сераДа'
                    },
                    {
                        question: 'ва..іца',
                        correct: 'дз',
                        fullAnswer: 'ваДЗіца'
                    },
                    {
                        question: 'цвёр..ы',
                        correct: 'д',
                        fullAnswer: 'цвёрДы'
                    },
                    {
                        question: 'сусе..і',
                        correct: 'дз',
                        fullAnswer: 'сусеДЗі'
                    },
                    {
                        question: 'за..ача',
                        correct: 'д',
                        fullAnswer: 'заДача'
                    }
                    ],
                    answers: ['д', 'дз']
            },
            {
                name: 'вариант 2',
                shortcut: '2',
                words: [
                    {
                        question: '..яжурны',
                        correct: 'дз',
                        fullAnswer: 'ДЗяжурны'
                    },
                    {
                        question: '..ужы',
                        correct: 'д',
                        fullAnswer: 'Дужы'
                    },
                    {
                        question: 'лю..і',
                        correct: 'дз',
                        fullAnswer: 'люДЗі'
                    },
                    {
                        question: 'па..арунак',
                        correct: 'д',
                        fullAnswer: 'паДарунак'
                    },
                    {
                        question: 'каман..ір',
                        correct: 'дз',
                        fullAnswer: 'каманДЗір'
                    },
                    {
                        question: '..ошка',
                        correct: 'д',
                        fullAnswer: 'Дошка'
                    },
                    {
                        question: '..юба',
                        correct: 'дз',
                        fullAnswer: 'ДЗюба'
                    },
                    {
                        question: '..ухмяны',
                        correct: 'д',
                        fullAnswer: 'Духмяны'
                    },
                    {
                        question: 'ты..ень',
                        correct: 'дз',
                        fullAnswer: 'тыДЗень'
                    },
                    {
                        question: 'жалу..ы',
                        correct: 'д',
                        fullAnswer: 'жалуДы'
                    }
                    ],
                    answers: ['д', 'дз']
            },
            {
                name: 'вариант 3',
                shortcut: '3',
                words: [
                    {
                        question: '..ённік',
                        correct: 'дз',
                        fullAnswer: 'ДЗённік'
                    },
                    {
                        question: 'ві..элец',
                        correct: 'д',
                        fullAnswer: 'віДэлец'
                    },
                    {
                        question: '..еці',
                        correct: 'дз',
                        fullAnswer: 'ДЗеці'
                    },
                    {
                        question: '..ыня',
                        correct: 'д',
                        fullAnswer: 'Дыня'
                    },
                    {
                        question: 'сера..а',
                        correct: 'д',
                        fullAnswer: 'сераДа'
                    },
                    {
                        question: 'паня..елак',
                        correct: 'дз',
                        fullAnswer: 'паняДЗелак'
                    },
                    {
                        question: '..якуй',
                        correct: 'дз',
                        fullAnswer: 'ДЗякуй'
                    },
                    {
                        question: '..ірка',
                        correct: 'дз',
                        fullAnswer: 'ДЗірка'
                    },
                    {
                        question: '..ужы',
                        correct: 'д',
                        fullAnswer: 'Дужы'
                    },
                    {
                        question: 'па..арожжа',
                        correct: 'д',
                        fullAnswer: 'паДарожжа'
                    }
                    ],
                    answers: ['д', 'дз']
            }
        ]
    },
    {
        task: 'Т, Ц',
        variants: [
            {
                name: 'вариант 1',
                shortcut: '1',
                words: [
                    {
                        question: 'прыля..ела',
                        correct: 'ц',
                        fullAnswer: 'прыляЦела'
                    },
                    {
                        question: 'хус..ачка',
                        correct: 'т',
                        fullAnswer: 'хусТачка'
                    },
                    {
                        question: 'па..еркі',
                        correct: 'ц',
                        fullAnswer: 'паЦеркі'
                    },
                    {
                        question: '..ячэ',
                        correct: 'ц',
                        fullAnswer: 'Цячэ'
                    },
                    {
                        question: 'ха..а',
                        correct: 'т',
                        fullAnswer: 'хаТа'
                    },
                    {
                        question: 'бало..а',
                        correct: 'т',
                        fullAnswer: 'балоТа'
                    },
                    {
                        question: '..вік',
                        correct: 'ц',
                        fullAnswer: 'Цвік'
                    },
                    {
                        question: 'рабо..а',
                        correct: 'т',
                        fullAnswer: 'рабоТа'
                    },
                    {
                        question: 'ква..эра',
                        correct: 'т',
                        fullAnswer: 'кваТэра'
                    },
                    {
                        question: 'Крыс..іна',
                        correct: 'ц',
                        fullAnswer: 'КрысЦіна'
                    }
                    ],
                    answers: ['т', 'ц']
            },
            {
                name: 'вариант 2',
                shortcut: '2',
                words: [
                    {
                        question: '..япло',
                        correct: 'ц',
                        fullAnswer: 'Цяпло'
                    },
                    {
                        question: 'с..ежка',
                        correct: 'ц',
                        fullAnswer: 'сЦежка'
                    },
                    {
                        question: 'с..ежка',
                        correct: 'ц',
                        fullAnswer: 'сЦежка'
                    },
                    {
                        question: 'ба..ькі',
                        correct: 'ц',
                        fullAnswer: 'баЦькі'
                    },
                    {
                        question: '..імафей',
                        correct: 'ц',
                        fullAnswer: 'Цімафей'
                    },
                    {
                        question: '..япло',
                        correct: 'ц',
                        fullAnswer: 'Цяпло'
                    },
                    {
                        question: 'кас..юм',
                        correct: 'ц',
                        fullAnswer: 'касЦюм'
                    },
                    {
                        question: 'ка..ялок',
                        correct: 'ц',
                        fullAnswer: 'каЦялок'
                    },
                    {
                        question: '..экст',
                        correct: 'т',
                        fullAnswer: 'Тэкст'
                    },
                    {
                        question: '..ішыня',
                        correct: 'ц',
                        fullAnswer: 'Цішыня'
                    }
                    ],
                    answers: ['т', 'ц']
            },
            {
                name: 'вариант 3',
                shortcut: '3',
                words: [
                    {
                        question: '..яжкі',
                        correct: 'ц',
                        fullAnswer: 'Цяжкі'
                    },
                    {
                        question: '..эхніка',
                        correct: 'т',
                        fullAnswer: 'Тэхніка'
                    },
                    {
                        question: 'він..ік',
                        correct: 'ц',
                        fullAnswer: 'вінЦік'
                    },
                    {
                        question: 'гіс..орыя',
                        correct: 'т',
                        fullAnswer: 'гісТорыя'
                    },
                    {
                        question: '..ікава',
                        correct: 'ц',
                        fullAnswer: 'Цікава'
                    },
                    {
                        question: 'кас..юм',
                        correct: 'ц',
                        fullAnswer: 'касЦюм'
                    },
                    {
                        question: 'ква..эра',
                        correct: 'т',
                        fullAnswer: 'кваТэра'
                    },
                    {
                        question: 'гальш..ук',
                        correct: 'т',
                        fullAnswer: 'гальшТук'
                    },
                    {
                        question: 'це..ярук',
                        correct: 'ц',
                        fullAnswer: 'цеЦярук'
                    },
                    {
                        question: '..элевізар',
                        correct: 'т',
                        fullAnswer: 'Тэлевізар'
                    }
                    ],
                    answers: ['т', 'ц']
            }
        ]
    },
    {
      task: 'Т, Д',
      variants: [
          {
            name: 'вариант 1',
            shortcut: '1',
            words: [
              {
                  question: 'кабіне..',
                  correct: 'т',
                  fullAnswer: 'кабінеТ'
              },
              {
                  question: 'яга..ка',
                  correct: 'д',
                  fullAnswer: 'ягаДка'
              },
              {
                  question: 'скла..',
                  correct: 'д',
                  fullAnswer: 'склаД'
              },
              {
                  question: 'сусе..',
                  correct: 'д',
                  fullAnswer: 'сусеД'
              },
              {
                  question: 'асфаль..',
                  correct: 'т',
                  fullAnswer: 'асфальТ'
              },
              {
                  question: 'веласіпе..',
                  correct: 'д',
                  fullAnswer: 'веласіпеД'
              },
              {
                  question: 'караго..',
                  correct: 'д',
                  fullAnswer: 'карагоД'
              },
              {
                  question: 'зара..ка',
                  correct: 'д',
                  fullAnswer: 'зараДка'
              },
              {
                  question: 'заво..',
                  correct: 'д',
                  fullAnswer: 'завоД'
              },
              {
                  question: 'маршру..',
                  correct: 'т',
                  fullAnswer: 'маршруТ'
              }
              ],
              answers: ['т', 'д']
          }
        ]
    },
    {
      task: 'Ж, Ш',
      variants: [
        {
          name: 'вариант 1',
          shortcut: '1',
          words: [
            {
                question: 'кні..ка',
                correct: 'ж',
                fullAnswer: 'кніЖка'
            },
            {
                question: 'тавары..',
                correct: 'ш',
                fullAnswer: 'таварыШ'
            },
            {
                question: 'лы..ка',
                correct: 'ж',
                fullAnswer: 'лыЖка'
            },
            {
                question: 'дожд..',
                correct: 'ж',
                fullAnswer: 'дождЖ'
            },
            {
                question: 'даро..ка',
                correct: 'ж',
                fullAnswer: 'дароЖка'
            },
            {
                question: 'стру..ка',
                correct: 'ж',
                fullAnswer: 'струЖка'
            },
            {
                question: 'эта..',
                correct: 'ж',
                fullAnswer: 'этаЖ'
            },
            {
                question: 'усме..ка',
                correct: 'ш',
                fullAnswer: 'усмеШка'
            },
            {
                question: 'мура..ка',
                correct: 'ш',
                fullAnswer: 'мураШка'
            },
            {
                question: 'паду..ка',
                correct: 'ш',
                fullAnswer: 'падуШка'
            }
            ],
            answers: ['ж', 'ш']
        },
      ]
    },
    {
      task: 'К, Г, Х',
      variants: [
        {
          name: 'вариант 1',
          shortcut: '1',
          words: [
            {
                question: 'сняжо..',
                correct: 'к',
                fullAnswer: 'сняжоК'
            },
            {
                question: 'лу..',
                correct: 'г',
                fullAnswer: 'луГ'
            },
            {
                question: 'кіраўні..',
                correct: 'к',
                fullAnswer: 'кіраўніК'
            },
            {
                question: 'мя..кі',
                correct: 'к',
                fullAnswer: 'мяКкі'
            },
            {
                question: 'шчупа..',
                correct: 'к',
                fullAnswer: 'шчупаК'
            },
            {
                question: 'сто..',
                correct: 'г',
                fullAnswer: 'стоГ'
            },
            {
                question: 'лё..кі',
                correct: 'г',
                fullAnswer: 'лёГкі'
            },
            {
                question: 'павер..',
                correct: 'х',
                fullAnswer: 'паверХ'
            },
            {
                question: 'аквалан..',
                correct: 'г',
                fullAnswer: 'акваланГ'
            },
            {
                question: 'дыяло..',
                correct: 'г',
                fullAnswer: 'дыялоГ'
            }
            ],
            answers: ['к', 'г', 'х']
        },
      ]
    }
];
