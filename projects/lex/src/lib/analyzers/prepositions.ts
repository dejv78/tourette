import {TokenAnalyzer} from './token-analyzer';
import {TK_PREPOSITION, TK_UNKNOWN, Token} from '../model/analysis-result';

/**
 * Předložky
 */
export class Prepositions
  implements TokenAnalyzer {

  preps: Map<string, string[]> = new Map<string, string[]>();

  constructor() {
    this.preps.set('2', ['z', 'ze', 'od', 'do', 'u', 'bez', 'během', 'kvůli', 'za', 'kromě']);
    this.preps.set('3', ['k', 'ke', 'proti', 'díky', 'vůči']);
    this.preps.set('4', ['pro', 'přes', 'ob']);
    this.preps.set('6', ['při']);
    this.preps.set('4/6', ['o', 'v', 've', 'po', 'na']);
    this.preps.set('4/7', ['nad', 'pod', 'před', 'mezi']);
    this.preps.set('2/4/7', ['za', 's']);
  }

  analyze(token: Token) {
    if (token.kind === TK_UNKNOWN) {
      const text = token.text.toLowerCase().trim();
      this.preps.forEach((value, key) => {
        for (const c of value) {
          if (c === text) {
            Prepositions.setPreposition(token, key);
          }
        }
      });
    }
  }

  private static setPreposition(token: Token, fall: string) {
    token.kind = TK_PREPOSITION;
    token.fall = fall;
  }
}
