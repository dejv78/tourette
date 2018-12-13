import { Injectable } from '@angular/core';
import {AnalysisParams} from './model/analysis-params';
import {AnalysisResult, Line, PUNCT_TYPE_END_OF_SENTENCE, TK_PUNCTUATION, TK_UNKNOWN, Token} from './model/analysis-result';
import {RegexSearch, SearchResult} from './util/regex-search';
import {TokenAnalyzer} from './analyzers/token-analyzer';
import {SyllablesCounter} from './analyzers/syllables-counter';
import {EmptyLineDetector} from './analyzers/empty-line-detector';
import {Conjunctions} from './analyzers/conjunctions';
import {Prepositions} from './analyzers/prepositions';
import {Numbers} from './analyzers/numbers';
import {Pronouns} from './analyzers/pronouns';
import {Parts} from './analyzers/parts';
import {Nouns} from './analyzers/nouns';
import {Verbs} from './analyzers/verbs';
import {Adjectives} from './analyzers/adjectives';
import {Adverbs} from './analyzers/adverbs';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {

  private punctuationSearch: RegexSearch = new RegexSearch('[\,\.\?\;\:]+', 'ig');
  private tokenAnalyzers: TokenAnalyzer[] = [];

  constructor() {
    this.tokenAnalyzers.push(new EmptyLineDetector());
    this.tokenAnalyzers.push(new SyllablesCounter());
    this.tokenAnalyzers.push(new Parts());
    this.tokenAnalyzers.push(new Numbers());
    this.tokenAnalyzers.push(new Conjunctions());
    this.tokenAnalyzers.push(new Prepositions());
    this.tokenAnalyzers.push(new Pronouns());
    this.tokenAnalyzers.push(new Nouns());
    this.tokenAnalyzers.push(new Adjectives());
    this.tokenAnalyzers.push(new Verbs());
    this.tokenAnalyzers.push(new Adverbs());
  }

  async analyze(text: string, params: AnalysisParams): Promise<AnalysisResult> {
    return new Promise<AnalysisResult>(async(resolve, reject) => {
      const result: AnalysisResult = await this.split(text);
      resolve(result);
    });
  }

  private async split(text: string): Promise<AnalysisResult> {
    return new Promise<AnalysisResult>((resolve, reject) => {
      const linesRaw: string[] = text.split('\n');
      const lines: Line[] = [];

      //Pregenerate tokens
      for (const line of linesRaw) {
        const tokensRaw: string[] = line.trim().split(' ');
        const tokens: Token[] = [];
        for (const token of tokensRaw) {
          const subtokens: Token[] = this.detectPunctuation(token);
          for (const subtoken of subtokens) {
            tokens.push(subtoken);
          }
        }
        lines.push(new Line(tokens));
      }


      //Analyze tokens
      //TODO: Generate sentences, and analyze tokens according to sentences instead of lines.
      //TODO: Pass current sentence to analyzer, along with token.
      //TODO: Return lines as usual.
      for (const line of lines) {
        for (const token of line.tokens) {
          for (const analyzer of this.tokenAnalyzers) {
            analyzer.analyze(token);
          }
        }
      }
      resolve(new AnalysisResult(lines));
    });
  }

  private detectPunctuation(token: string): Token[] {
    const result: Token[] = [];
    const search: SearchResult[] = this.punctuationSearch.exec(token);
    for (const sr of search) {
      const t: Token = new Token(sr.fragment, sr.hit ? TK_PUNCTUATION : TK_UNKNOWN);
      if (t.kind === TK_PUNCTUATION) {
        t.type = (t.text.indexOf(',') >=0) ? null : PUNCT_TYPE_END_OF_SENTENCE;
      }
      result.push(t);
    }
    return result;
  }
}
