import {TokenAnalyzer} from './token-analyzer';
import {TK_EMPTY_LINE, TK_PUNCTUATION, Token} from '../model/analysis-result';

/**
 * Počítadlo slabik
 */
export class SyllablesCounter
  implements TokenAnalyzer {

  private regexp = new RegExp('[aáeéiíyýoóuúů]+', 'ig');

  analyze(token: Token) {
    if ((token.kind === TK_EMPTY_LINE) || (token.kind === TK_PUNCTUATION)) {
      return;
    }
    let first = true;
    let syllablesCount = 0;
    let myArray;
    while ((myArray = this.regexp.exec(token.text)) !== null) {
      syllablesCount++;
      if (first) {
        first = false;
        if (myArray.index >= 3) {
          syllablesCount++;
        }
      }
    }
    //console.log(`Token: [${token.text}] Syllables: ${syllablesCount}`);
    token.syllables = syllablesCount ? syllablesCount : (token.text.trim().length >= 1) ? 1 : 0;
  }

}
