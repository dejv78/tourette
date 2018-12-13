import {TokenAnalyzer} from './token-analyzer';
import {TK_CONJUNCTION, TK_UNKNOWN, Token} from '../model/analysis-result';

/**
 * Spojky
 */
export class Conjunctions
  implements TokenAnalyzer {
  private cj: string[] = ['a', 'ani', 'nebo', 'ale', 'avšak', 'ba', 'i', 'dokonce', 'nebo', 'anebo', 'tudíž', 'totiž', 'neboť', 'proto'];

  analyze(token: Token) {
    if (token.kind === TK_UNKNOWN) {
      const text = token.text.toLowerCase().trim();
      for (const c of this.cj) {
        if (c === text) {
          token.kind = TK_CONJUNCTION;
        }
      }
    }
  }
}
