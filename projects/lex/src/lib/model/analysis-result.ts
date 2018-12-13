export const TK_UNKNOWN: string = 'nn';
export const TK_PUNCTUATION: string = 'ip';
export const TK_EMPTY_LINE: string = '-';
export const TK_CONJUNCTION: string = 'sp';
export const TK_PREPOSITION: string = 'přl';
export const TK_NUMBER: string = 'čís';
export const TK_PRONOUN: string = 'záj';
export const TK_PART: string = 'čst';

export const PUNCT_TYPE_END_OF_SENTENCE: string = 'kv';

export const NUMBER_TYPE_BASIC: string = 'z';
export const NUMBER_TYPE_HAFO: string = 'h';
export const NUMBER_TYPE_ROW: string = 'ř';
export const NUMBER_TYPE_KND: string = 'd';

export const PRONOUN_TYPE_PERSONAL: string = 'osb';
export const PRONOUN_TYPE_OWNERSHIP: string = 'při';
export const PRONOUN_TYPE_POINTING: string = 'uka';
export const PRONOUN_TYPE_QUESTION: string = 'táz';
export const PRONOUN_TYPE_RELATION: string = 'vzt';
export const PRONOUN_TYPE_INDEFINITE: string = 'neu';
export const PRONOUN_TYPE_NEGATIVE: string = 'záp';

export const GENDER_UNKNOWN: string = '-';
export const GENDER_MALE: string = 'm';
export const GENDER_FEMALE: string = 'ž';
export const GENDER_MIDDLE: string = 's';
export const GENDER_FEMALE_MIDDLE: string = 'ž/s';

export const FALL_1: string = '1';
export const FALL_2: string = '2';
export const FALL_3: string = '3';
export const FALL_4: string = '4';
export const FALL_5: string = '5';
export const FALL_6: string = '6';
export const FALL_7: string = '7';

export const AMOUNT_UNKNOWN: string = '-';
export const AMOUNT_SINGLE: string = 'j';
export const AMOUNT_MULTIPLE: string = 'm';

export class Token {
  public text: string;
  public kind: string;
  public type: string;
  public syllables: number;
  public fall: string;
  public gender: string;
  public amount: string;

  constructor(text: string, kind?: string) {
    this.text = text;
    this.kind = kind ? kind : TK_UNKNOWN;
  }

}

export class Line {
  constructor(public tokens: Token[]) {};
}

export class AnalysisResult {
  constructor(public lines: Line[]) {};
}
