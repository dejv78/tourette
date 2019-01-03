import {Line, Token} from '../model/analysis-result';

export interface TokenAnalyzer {
  analyze(token: Token, before? : Token, after? : Token, line?: Line);
}
