import {TokenAnalyzer} from './token-analyzer';
import {GENDER_FEMALE, GENDER_FEMALE_MIDDLE, GENDER_MALE, GENDER_MIDDLE, GENDER_UNKNOWN, NUMBER_TYPE_BASIC, NUMBER_TYPE_HAFO, NUMBER_TYPE_KND, NUMBER_TYPE_ROW, TK_NUMBER, TK_PREPOSITION, TK_UNKNOWN, Token} from '../model/analysis-result';

/**
 * Číslovky
 */
export class Numbers
  implements TokenAnalyzer {

  posts: Map<string, string[]> = new Map<string, string[]>();
  numbers: Map<string, Map<string, string[]>> = new Map<string, Map<string, string[]>>();

  constructor() {
    this.posts.set(NUMBER_TYPE_BASIC, ['náct', 'cet', 'sát', 'stě', 'sta']);
    this.posts.set(NUMBER_TYPE_KND, ['tery']);

    const m_hafo = new Map<string, string[]>();
    m_hafo.set(GENDER_UNKNOWN, ['stovky', 'tisíce', 'tisícovky', 'desetitisíce', 'statisíce', 'miliony', 'miliardy']);

    const m_zakl = new Map<string, string[]>();
    m_zakl.set(GENDER_UNKNOWN, ['tři', 'čtyři', 'pět', 'šest', 'sedm', 'osm', 'devět', 'deset', 'sto', 'tisíc', 'milion']);
    m_zakl.set(GENDER_MALE, ['jeden', 'dva']);
    m_zakl.set(GENDER_FEMALE, ['jedna']);
    m_zakl.set(GENDER_MIDDLE, ['jedno']);
    m_zakl.set(GENDER_FEMALE_MIDDLE, ['dvě']);

    const m_rad = new Map<string, string[]>();
    m_rad.set(GENDER_UNKNOWN, ['první', 'třetí', 'tisící', 'desetitisící', 'statisící']);
    m_rad.set(GENDER_MALE, ['prvý', 'druhý', 'druhej', 'čtvrtý', 'pátý', 'šestý', 'sedmý', 'osmý', 'devátý', 'desátý', 'stý', 'milontý']);
    m_rad.set(GENDER_FEMALE, ['prvá', 'druhá', 'čtvrtá', 'pátá', 'šestá', 'sedmá', 'osmá', 'devátá', 'desátá', 'stá', 'milontá']);
    m_rad.set(GENDER_MIDDLE, ['prvé', 'druhé', 'čtvrté', 'páté', 'šesté', 'sedmé', 'osmé', 'deváté', 'desáté', 'sté', 'milonté']);

    const m_druh = new Map<string, string[]>();
    m_druh.set(GENDER_UNKNOWN, ['jedny', 'dvoje', 'troje', 'čtvery', 'patery']);

    this.numbers.set(NUMBER_TYPE_BASIC, m_zakl);
    this.numbers.set(NUMBER_TYPE_HAFO, m_hafo);
    this.numbers.set(NUMBER_TYPE_ROW, m_rad);
    this.numbers.set(NUMBER_TYPE_KND, m_druh);
  }

  analyze(token: Token) {
    if (token.kind === TK_UNKNOWN) {
      const text = token.text.toLowerCase().trim();

      this.numbers.forEach((value1, key1) => {
        value1.forEach((value2, key2) => {
          for (const c of value2) {
            if (c === text) {
              Numbers.setNumber(token, key1, key2);
              return;
            }
          }
        });
      });

      this.posts.forEach((value1, key1) => {
          for (const c of value1) {
            if (text.endsWith(c)) {
              if (key1 === NUMBER_TYPE_BASIC) {
                const m_zakl: Map<string, string[]> = this.numbers.get(key1);
                this.parseNumbers(m_zakl, value1, text, token, key1);
              }
              if (key1 === NUMBER_TYPE_KND) {
                const m_druh: Map<string, string[]> = this.numbers.get(key1);
                this.parseNumbers(m_druh, value1, text, token, key1);
              }
              return;
            }
          }
      });
    }
  }

  private parseNumbers(map: Map<string, string[]>, value1, text, token: Token, key1) {
    map.forEach((value2, key2) => {
      for (const c2 of value1) {
        if (text.startsWith(c2)) {
          Numbers.setNumber(token, key1, key2);
          return;
        }
      }
    })
  }

  private static setNumber(token: Token, type: string, gender: string) {
    token.kind = TK_NUMBER;
    token.type = type;
    token.gender = gender;
  }

}
