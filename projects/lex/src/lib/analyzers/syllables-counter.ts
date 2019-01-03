import {TokenAnalyzer} from './token-analyzer';
import {TK_EMPTY_LINE, TK_PUNCTUATION, Token} from '../model/analysis-result';

/**
 * Počítadlo slabik
 */
export class SyllablesCounter
  implements TokenAnalyzer {

  private regexp = new RegExp('[aáeéěiíyýoóuúů]+', 'ig');
  private longs = ['á', 'é', 'í', 'ý', 'ó', 'ú', 'ů'];

  analyze(token: Token) {
    if ((token.kind === TK_EMPTY_LINE) || (token.kind === TK_PUNCTUATION)) {
      return;
    }
    let first = true;
    let syllables = '';
    let myArray;
    while ((myArray = this.regexp.exec(token.text)) !== null) {
      const match = myArray[0];
      syllables += ((match.length > 1) || (this.longs.includes(match))) ? '_' : '.';
      if (first) {
        first = false;
        if ((myArray.index >= 3) && (token.text.substring(0, 2).includes('r'))) {
          syllables = '.' + syllables;
        }
      }
    }
    //console.log(`Token: [${token.text}] Syllables: ${syllablesCount}`);
    token.syllables = (syllables.length > 0) ? syllables : (token.text.trim().length >= 1) ? '.' : null;
  }

}
