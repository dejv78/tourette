import {TokenAnalyzer} from './token-analyzer';
import {Line, TK_CONNECTED, TK_DEAD, TK_PREPOSITION, Token} from '../model/analysis-result';

export class Singles implements TokenAnalyzer {

  analyze(current: Token, previous?: Token, next?: Token, line?: Line) {
    if ((current.kind !== TK_DEAD) && (current.syllables) && (current.syllables.length === 1) && ((!previous || (previous.kind !== TK_DEAD)))
      && (next) && (next.kind !== TK_DEAD) && (next.kind !== TK_PREPOSITION) && (next.syllables) && (next.syllables.length === 1) && (line.tokens.indexOf(next) < line.tokens.length - 2)) {

      current.text += (' ' + next.text);
      current.syllables += next.syllables;
      current.kind = TK_CONNECTED;
      next.kind = TK_DEAD;
      line.tokensToRemove.push(next);
    }
  }

}
