import {Inject, Injectable} from '@angular/core';
import {FileLoaderService} from '@d78ng/file-loader';
import {AnalysisResult, TK_AFTER_PREPOSITION, TK_CONJUNCTION, TK_CONNECTED, TK_EMPTY_LINE, TK_PREPOSITION, TK_PUNCTUATION, Token} from './model/analysis-result';
import {DATA_DICT, DATA_DICTP} from '../../../../src/app/app.tokens';

@Injectable({
  providedIn: 'root'
})
export class DecoService {

  private dictionary: Map<string, string[]> = new Map<string, string[]>();
  private dictionary_prepositions: Map<string, Map<string, string[]>> = new Map<string, Map<string, string[]>>();
  private used: string[] = [];
  private replacements: Map<string, string> = new Map<string, string>();

  constructor(@Inject(DATA_DICT) private dict: FileLoaderService, @Inject(DATA_DICTP) private dictp: FileLoaderService) {
    for (const syl of Object.keys(dict.data)) {
      this.dictionary.set(syl, dict.data[syl]);
    }
    for (const prep of Object.keys(dictp.data)) {
      const preposition = dictp.data[prep];
      const map: Map<string, string[]> = new Map<string, string[]>();
      for (const syl of Object.keys(preposition)) {
        map.set(syl, preposition[syl]);
      }
      this.dictionary_prepositions.set(prep, map);
    }
  }

  async decorate(analysis: AnalysisResult): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.replacements.clear();
      for (const line of analysis.lines) {
        const significantTokens: Token[] = [];
        for (const token of line.tokens) {
          if ((token.kind !== TK_PUNCTUATION) && (token.kind !== TK_EMPTY_LINE) && (token.kind !== TK_CONJUNCTION) && (token.kind !== TK_PREPOSITION)) {
            token.decorate = (token.kind === TK_CONNECTED);
            significantTokens.push(token);
          }
        }
        const step = (analysis.english ? 5 : 3);
        for (let i = significantTokens.length-2; i >= 0; i -= step) {
          significantTokens[i].decorate = true;
        }
      }
      let result = '';
      for (const line of analysis.lines) {
        let first = true;
        for (const token of line.tokens) {
          if ((!first) && (token.kind !== TK_PUNCTUATION)) {
            result += ' ';
          }
          if (token.kind === TK_AFTER_PREPOSITION) {
            result += (token.decorate) ? this.replaceTokenByPreposition(token) : token.text;
          } else {
            result += (token.decorate) ? this.replaceToken(token) : token.text;
          }
          first = false;
        }
        result += '\n';
      }
      resolve(result);
    });
  }

  replaceToken(t: Token): string {
    if ((t.syllables != null) && (this.dictionary.has(t.syllables))) {
      return this.replaceTokenFromArray(t, this.dictionary.get(t.syllables), 0);
    }
    return t.text;
  }

  replaceTokenByPreposition(t: Token): string {
    if ((t.type != null) && (this.dictionary_prepositions.has(t.type))) {
      const dict: Map<string, string[]> = this.dictionary_prepositions.get(t.type);
      if ((t.syllables != null) && (dict.has(t.syllables))) {
        return this.replaceTokenFromArray(t, dict.get(t.syllables), 0);
      }
    }
    return this.replaceToken(t);
  }

  replaceTokenFromArray(t: Token, arr: string[], depth: number): string {
    const len = arr.length - 1;
    const textlc = t.text.toLowerCase();
    let replacement = '';

    if (this.replacements.has(textlc)) {
      replacement = this.replacements.get(textlc);
    } else {
      replacement = (len > 1) ?  arr[Math.round((Math.random() * len))] : arr[0];

      if (this.used.includes(replacement)) {
        replacement = (depth < 3) ? this.replaceTokenFromArray(t, arr, depth+1) : t.text;
      } else {
        this.replacements.set(textlc, replacement);
        this.used.push(replacement);
      }
    }

    if (this.used.length > 5) {
      this.used.splice(0, 1);
    }
    if (t.sentenceStart) {
      replacement = replacement.charAt(0).toUpperCase() + replacement.slice(1);
    }
    return replacement;
  }

}
