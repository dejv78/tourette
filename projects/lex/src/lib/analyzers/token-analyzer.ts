import {Token} from '../model/analysis-result';

export interface TokenAnalyzer {
  analyze(token: Token);
}
