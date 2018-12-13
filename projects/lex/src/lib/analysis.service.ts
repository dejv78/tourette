import { Injectable } from '@angular/core';
import {AnalysisParams} from './model/analysis-params';
import {AnalysisResult, Line, Token} from './model/analysis-result';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {

  constructor() { }

  async analyze(text: string, params: AnalysisParams): Promise<AnalysisResult> {
    return new Promise<AnalysisResult>(async(resolve, reject) => {
      const result: AnalysisResult = await this.split(text);
      resolve(result);
    });
  }

  async split(text: string): Promise<AnalysisResult> {
    return new Promise<AnalysisResult>((resolve, reject) => {
      const linesRaw: string[] = text.split('\n');
      const lines: Line[] = [];
      for (const line of linesRaw) {
        const tokensRaw: string[] = line.split(' ');
        const tokens: Token[] = [];
        for (const token of tokensRaw) {
          tokens.push(new Token(token));
        }
        lines.push(new Line(tokens));
      }
      resolve(new AnalysisResult(lines));
    });
  }
}
