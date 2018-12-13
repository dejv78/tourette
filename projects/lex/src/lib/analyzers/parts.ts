/**
 * Částice
 */
import {TokenAnalyzer} from './token-analyzer';
import {TK_PART, TK_UNKNOWN, Token} from '../model/analysis-result';

export class Parts
  implements TokenAnalyzer {
  parts: string[] = ["ať", "kéž", "nejspíš", "zajisté", "prostě", "snad", "asi", "právě", "možná", "právě", "jen", "také", "ano", "ne", "nikoli", "nikoliv", "samozřejmě", "bohužel", "každopádně", "naštěstí", "příliš", "velmi", "velice", "převelice", "moc", "třeba", "teprve", "teprv", "pouze", "přímo"];

  analyze(token: Token) {
    if (token.kind !== TK_UNKNOWN) {
      return;
    }
    const text: string = token.text.toLowerCase().trim();
    for (const c of this.parts) {
      if (c === text) {
        token.kind = TK_PART;
      }
    }
  }
}
