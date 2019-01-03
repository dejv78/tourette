import { Injectable } from '@angular/core';
import {AnalysisParams} from './model/analysis-params';
import {AnalysisResult, Line, PUNCT_TYPE_END_OF_SENTENCE, TK_EMPTY_LINE, TK_PUNCTUATION, TK_UNKNOWN, Token} from './model/analysis-result';
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
import {Singles} from './analyzers/singles';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {

  private punctuationSearch: RegexSearch = new RegexSearch('[\,\.\?\;\:]+', 'ig');
  private tokenAnalyzersFirstPass: TokenAnalyzer[] = [];
  private tokenAnalyzersSecondPass: TokenAnalyzer[] = [];

  constructor() {
    this.tokenAnalyzersFirstPass.push(new EmptyLineDetector());
    this.tokenAnalyzersFirstPass.push(new SyllablesCounter());
    this.tokenAnalyzersFirstPass.push(new Parts());
    this.tokenAnalyzersFirstPass.push(new Numbers());
    this.tokenAnalyzersFirstPass.push(new Conjunctions());
    this.tokenAnalyzersFirstPass.push(new Prepositions());
    this.tokenAnalyzersFirstPass.push(new Pronouns());
    // this.tokenAnalyzers.push(new Nouns());
    // this.tokenAnalyzers.push(new Adjectives());
    // this.tokenAnalyzers.push(new Verbs());
    // this.tokenAnalyzers.push(new Adverbs());
    this.tokenAnalyzersSecondPass.push(new Singles());
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
      let english = false;

      const allTokens: Token[] = [];
      //Pregenerate tokens
      for (const line of linesRaw) {
        const tokensRaw: string[] = line.trim().split(' ');
        const tokens: Token[] = [];
        for (const token of tokensRaw) {
          const subtokens: Token[] = this.detectPunctuation(token);
          for (const subtoken of subtokens) {
            english = english || AnalysisService.detectEnglish(subtoken);
            tokens.push(subtoken);
            allTokens.push(subtoken);
          }
        }
        lines.push(new Line(tokens));
      }

      //Analyze tokens
      for (const line of lines) {
        AnalysisService.analyzeLine(line, this.tokenAnalyzersFirstPass);
        AnalysisService.analyzeLine(line, this.tokenAnalyzersSecondPass);

        for (const dead of line.tokensToRemove) {
          line.tokens.splice(line.tokens.indexOf(dead), 1);
        }
      }

      allTokens[0].sentenceStart = true;
      for (let i = 0; i < allTokens.length-1; i++) {
        AnalysisService.detectSentenceStarts(allTokens[i], allTokens[i+1]);
      }

      resolve(new AnalysisResult(lines, english));
    });
  }

  private static analyzeLine(line: Line, analyzers: TokenAnalyzer[]) {
    for (let i = 0; i < line.tokens.length; i++) {
      for (const analyzer of analyzers) {
        analyzer.analyze(line.tokens[i], (i > 0) ? line.tokens[i - 1] : null, (i < line.tokens.length - 1) ? line.tokens[i + 1] : null, line);
      }
    }
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

  private static detectEnglish(token: Token): boolean {
    return (token.text.toLowerCase() === 'the');
  }

  private static detectSentenceStarts(current: Token, next: Token) {
    next.sentenceStart = (current.type === PUNCT_TYPE_END_OF_SENTENCE) || (current.kind === TK_EMPTY_LINE);
  }
}
