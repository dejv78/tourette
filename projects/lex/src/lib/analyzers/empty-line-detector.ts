import {TokenAnalyzer} from './token-analyzer';
import {TK_EMPTY_LINE, Token} from '../model/analysis-result';

/**
 * Detekce prázdných řádků
 */
export class EmptyLineDetector
  implements TokenAnalyzer {

  analyze(token: Token) {
    if (token.text.trim() === '') {
      token.kind = TK_EMPTY_LINE;
    }
  }

}
