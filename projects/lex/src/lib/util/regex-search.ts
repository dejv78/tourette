export class SearchResult {

  constructor(public fragment: string, public hit: boolean, public index: number) { }
}

export class RegexSearch {

  private regexp: RegExp;

  constructor(private pattern: string, private flags: string) {
    this.regexp = new RegExp(pattern, flags);
  }

  public exec(text: string): SearchResult[] {
    const result: SearchResult[] = [];

    let oldindex = 0;
    let myArray;
    while ((myArray = this.regexp.exec(text)) !== null) {
      //console.log(`Text: [${text}] From: ${oldindex}, To hit: ${myArray.index}, To: ${this.regexp.lastIndex}`);
      result.push(new SearchResult(text.substring(oldindex, myArray.index), false, oldindex));
      result.push(new SearchResult(text.substring(myArray.index, this.regexp.lastIndex), true, myArray.index));
      oldindex = this.regexp.lastIndex;
    }
    if (!oldindex) {
      result.push(new SearchResult(text.substring(oldindex, text.length), false, oldindex));
    }
    return result;
  }
}
