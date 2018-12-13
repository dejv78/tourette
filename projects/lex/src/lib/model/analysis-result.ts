export class Token {
  text: string;
  type: string;
  syllables: number;

  constructor(text: string) {
    this.text = text;
  }
}

export class Line {
  constructor(tokens: Token[]) {};
}

export class AnalysisResult {
  constructor(public lines: Line[]) {};
}
