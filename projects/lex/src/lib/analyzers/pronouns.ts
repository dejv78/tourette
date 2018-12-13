import {AMOUNT_MULTIPLE, AMOUNT_SINGLE, AMOUNT_UNKNOWN, FALL_1, FALL_2, GENDER_FEMALE, GENDER_FEMALE_MIDDLE, GENDER_MALE, GENDER_MIDDLE, GENDER_UNKNOWN, NUMBER_TYPE_HAFO, PRONOUN_TYPE_INDEFINITE, PRONOUN_TYPE_NEGATIVE, PRONOUN_TYPE_OWNERSHIP, PRONOUN_TYPE_PERSONAL, PRONOUN_TYPE_POINTING, PRONOUN_TYPE_QUESTION, PRONOUN_TYPE_RELATION, TK_PRONOUN, TK_UNKNOWN, Token} from '../model/analysis-result';
import {TokenAnalyzer} from './token-analyzer';

export class PronounProps {
  constructor(
    public type: string,
    public fall: string,
    public gender: string,
    public amount: string) {}
}

/**
 * Zájména
 */
export class Pronouns
  implements TokenAnalyzer {
  private pronouns: Map<string, PronounProps> = new Map<string, PronounProps>();

  constructor() {
    this.pronouns.set('já', new PronounProps(PRONOUN_TYPE_PERSONAL, FALL_1, GENDER_UNKNOWN, AMOUNT_SINGLE));
    this.pronouns.set('ty', new PronounProps(PRONOUN_TYPE_PERSONAL, FALL_1, GENDER_UNKNOWN, AMOUNT_SINGLE));
    this.pronouns.set('on', new PronounProps(PRONOUN_TYPE_PERSONAL, FALL_1, GENDER_MALE, AMOUNT_SINGLE));
    this.pronouns.set('ona', new PronounProps(PRONOUN_TYPE_PERSONAL, FALL_1, GENDER_FEMALE, AMOUNT_SINGLE));
    this.pronouns.set('ono', new PronounProps(PRONOUN_TYPE_PERSONAL, FALL_1, GENDER_MIDDLE, AMOUNT_SINGLE));
    this.pronouns.set('my', new PronounProps(PRONOUN_TYPE_PERSONAL, FALL_1, GENDER_UNKNOWN, AMOUNT_MULTIPLE));
    this.pronouns.set('vy', new PronounProps(PRONOUN_TYPE_PERSONAL, FALL_1, GENDER_UNKNOWN, AMOUNT_MULTIPLE));
    this.pronouns.set('oni', new PronounProps(PRONOUN_TYPE_PERSONAL, FALL_1, GENDER_MALE, AMOUNT_MULTIPLE));
    this.pronouns.set('ony', new PronounProps(PRONOUN_TYPE_PERSONAL, FALL_1, GENDER_FEMALE_MIDDLE, AMOUNT_MULTIPLE));

    this.pronouns.set('můj', new PronounProps(PRONOUN_TYPE_OWNERSHIP, FALL_2, GENDER_MALE, AMOUNT_SINGLE));
    this.pronouns.set('tvůj', new PronounProps(PRONOUN_TYPE_OWNERSHIP, FALL_2, GENDER_MALE, AMOUNT_SINGLE));
    this.pronouns.set('jeho', new PronounProps(PRONOUN_TYPE_OWNERSHIP, FALL_2, GENDER_MALE, AMOUNT_SINGLE));
    this.pronouns.set('její', new PronounProps(PRONOUN_TYPE_OWNERSHIP, FALL_2, GENDER_FEMALE, AMOUNT_SINGLE));
    this.pronouns.set('náš', new PronounProps(PRONOUN_TYPE_OWNERSHIP, FALL_2, GENDER_MALE, AMOUNT_SINGLE));
    this.pronouns.set('naše', new PronounProps(PRONOUN_TYPE_OWNERSHIP, FALL_2, GENDER_FEMALE_MIDDLE, AMOUNT_UNKNOWN));
    this.pronouns.set('váš', new PronounProps(PRONOUN_TYPE_OWNERSHIP, FALL_2, GENDER_MALE, AMOUNT_SINGLE));
    this.pronouns.set('vaše', new PronounProps(PRONOUN_TYPE_OWNERSHIP, FALL_2, GENDER_FEMALE_MIDDLE, AMOUNT_UNKNOWN));
    this.pronouns.set('jejich', new PronounProps(PRONOUN_TYPE_OWNERSHIP, FALL_2, GENDER_UNKNOWN, AMOUNT_UNKNOWN));
    this.pronouns.set('svůj', new PronounProps(PRONOUN_TYPE_OWNERSHIP, FALL_2, GENDER_MALE, AMOUNT_SINGLE));
    this.pronouns.set('svoje', new PronounProps(PRONOUN_TYPE_OWNERSHIP, FALL_2, GENDER_FEMALE_MIDDLE, AMOUNT_UNKNOWN));

    this.pronouns.set('ten', new PronounProps(PRONOUN_TYPE_POINTING, FALL_1, GENDER_MALE, AMOUNT_SINGLE));
    this.pronouns.set('tento', new PronounProps(PRONOUN_TYPE_POINTING, FALL_1, GENDER_MALE, AMOUNT_SINGLE));
    this.pronouns.set('tenhle', new PronounProps(PRONOUN_TYPE_POINTING, FALL_1, GENDER_MALE, AMOUNT_SINGLE));
    this.pronouns.set('ta', new PronounProps(PRONOUN_TYPE_POINTING, FALL_1, GENDER_FEMALE, AMOUNT_SINGLE));
    this.pronouns.set('tahle', new PronounProps(PRONOUN_TYPE_POINTING, FALL_1, GENDER_MALE, AMOUNT_SINGLE));
    this.pronouns.set('to', new PronounProps(PRONOUN_TYPE_POINTING, FALL_1, GENDER_MIDDLE, AMOUNT_SINGLE));
    this.pronouns.set('tohle', new PronounProps(PRONOUN_TYPE_POINTING, FALL_1, GENDER_MIDDLE, AMOUNT_SINGLE));
    this.pronouns.set('ti', new PronounProps(PRONOUN_TYPE_POINTING, FALL_1, GENDER_MALE, AMOUNT_MULTIPLE));
    this.pronouns.set('tito', new PronounProps(PRONOUN_TYPE_POINTING, FALL_1, GENDER_MALE, AMOUNT_MULTIPLE));
    this.pronouns.set('ti', new PronounProps(PRONOUN_TYPE_POINTING, FALL_1, GENDER_MALE, AMOUNT_MULTIPLE));
    this.pronouns.set('ty', new PronounProps(PRONOUN_TYPE_POINTING, FALL_1, GENDER_FEMALE, AMOUNT_MULTIPLE));
    this.pronouns.set('tyto', new PronounProps(PRONOUN_TYPE_POINTING, FALL_1, GENDER_FEMALE, AMOUNT_MULTIPLE));
    this.pronouns.set('tyhle', new PronounProps(PRONOUN_TYPE_POINTING, FALL_1, GENDER_FEMALE, AMOUNT_MULTIPLE));

    this.pronouns.set('kdo', new PronounProps(PRONOUN_TYPE_QUESTION, FALL_1, GENDER_UNKNOWN, AMOUNT_UNKNOWN));
    this.pronouns.set('kdopak', new PronounProps(PRONOUN_TYPE_QUESTION, FALL_1, GENDER_UNKNOWN, AMOUNT_UNKNOWN));
    this.pronouns.set('co', new PronounProps(PRONOUN_TYPE_QUESTION, FALL_1, GENDER_MIDDLE, AMOUNT_SINGLE));
    this.pronouns.set('copak', new PronounProps(PRONOUN_TYPE_QUESTION, FALL_1, GENDER_MIDDLE, AMOUNT_SINGLE));
    this.pronouns.set('jaký', new PronounProps(PRONOUN_TYPE_QUESTION, FALL_1, GENDER_MALE, AMOUNT_SINGLE));
    this.pronouns.set('jakýpak', new PronounProps(PRONOUN_TYPE_QUESTION, FALL_1, GENDER_MALE, AMOUNT_SINGLE));
    this.pronouns.set('který', new PronounProps(PRONOUN_TYPE_QUESTION, FALL_1, GENDER_MALE, AMOUNT_SINGLE));
    this.pronouns.set('kterýpak', new PronounProps(PRONOUN_TYPE_QUESTION, FALL_1, GENDER_MALE, AMOUNT_SINGLE));
    this.pronouns.set('čí', new PronounProps(PRONOUN_TYPE_QUESTION, FALL_2, GENDER_UNKNOWN, AMOUNT_UNKNOWN));
    this.pronouns.set('čípak', new PronounProps(PRONOUN_TYPE_QUESTION, FALL_2, GENDER_UNKNOWN, AMOUNT_UNKNOWN));

    this.pronouns.set('jenž', new PronounProps(PRONOUN_TYPE_RELATION, FALL_1, GENDER_MALE, AMOUNT_SINGLE));
    this.pronouns.set('jež', new PronounProps(PRONOUN_TYPE_RELATION, FALL_1, GENDER_FEMALE, AMOUNT_SINGLE));

    this.pronouns.set('někdo', new PronounProps(PRONOUN_TYPE_INDEFINITE, FALL_1, GENDER_UNKNOWN, AMOUNT_SINGLE));
    this.pronouns.set('něco', new PronounProps(PRONOUN_TYPE_INDEFINITE, FALL_1, GENDER_MIDDLE, AMOUNT_SINGLE));
    this.pronouns.set('kdokoli', new PronounProps(PRONOUN_TYPE_INDEFINITE, FALL_1, GENDER_UNKNOWN, AMOUNT_UNKNOWN));
    this.pronouns.set('kdokoliv', new PronounProps(PRONOUN_TYPE_INDEFINITE, FALL_1, GENDER_UNKNOWN, AMOUNT_UNKNOWN));
    this.pronouns.set('cokoli', new PronounProps(PRONOUN_TYPE_INDEFINITE, FALL_1, GENDER_MIDDLE, AMOUNT_UNKNOWN));
    this.pronouns.set('cokoliv', new PronounProps(PRONOUN_TYPE_INDEFINITE, FALL_1, GENDER_MIDDLE, AMOUNT_UNKNOWN));
    this.pronouns.set('kdekdo', new PronounProps(PRONOUN_TYPE_INDEFINITE, FALL_1, GENDER_UNKNOWN, AMOUNT_UNKNOWN));
    this.pronouns.set('kdosi', new PronounProps(PRONOUN_TYPE_INDEFINITE, FALL_1, GENDER_UNKNOWN, AMOUNT_UNKNOWN));
    this.pronouns.set('každý', new PronounProps(PRONOUN_TYPE_INDEFINITE, FALL_1, GENDER_MALE, AMOUNT_UNKNOWN));
    this.pronouns.set('každá', new PronounProps(PRONOUN_TYPE_INDEFINITE, FALL_1, GENDER_FEMALE, AMOUNT_UNKNOWN));
    this.pronouns.set('každé', new PronounProps(PRONOUN_TYPE_INDEFINITE, FALL_1, GENDER_MIDDLE, AMOUNT_UNKNOWN));
    this.pronouns.set('všechen', new PronounProps(PRONOUN_TYPE_INDEFINITE, FALL_1, GENDER_MALE, AMOUNT_UNKNOWN));
    this.pronouns.set('všechna', new PronounProps(PRONOUN_TYPE_INDEFINITE, FALL_1, GENDER_FEMALE, AMOUNT_UNKNOWN));
    this.pronouns.set('všechno', new PronounProps(PRONOUN_TYPE_INDEFINITE, FALL_1, GENDER_MIDDLE, AMOUNT_UNKNOWN));
    this.pronouns.set('všichni', new PronounProps(PRONOUN_TYPE_INDEFINITE, FALL_1, GENDER_MALE, AMOUNT_MULTIPLE));
    this.pronouns.set('všechny', new PronounProps(PRONOUN_TYPE_INDEFINITE, FALL_1, GENDER_FEMALE, AMOUNT_MULTIPLE));

    this.pronouns.set('nikdo', new PronounProps(PRONOUN_TYPE_NEGATIVE, FALL_1, GENDER_UNKNOWN, AMOUNT_UNKNOWN));
    this.pronouns.set('nic', new PronounProps(PRONOUN_TYPE_NEGATIVE, FALL_1, GENDER_MIDDLE, AMOUNT_UNKNOWN));
    this.pronouns.set('ničí', new PronounProps(PRONOUN_TYPE_NEGATIVE, FALL_2, GENDER_UNKNOWN, AMOUNT_UNKNOWN));
    this.pronouns.set('nijaký', new PronounProps(PRONOUN_TYPE_NEGATIVE, FALL_2, GENDER_MALE, AMOUNT_SINGLE));
    this.pronouns.set('nijaká', new PronounProps(PRONOUN_TYPE_NEGATIVE, FALL_2, GENDER_FEMALE, AMOUNT_SINGLE));
    this.pronouns.set('nijaké', new PronounProps(PRONOUN_TYPE_NEGATIVE, FALL_2, GENDER_MIDDLE, AMOUNT_UNKNOWN));
    this.pronouns.set('žádný', new PronounProps(PRONOUN_TYPE_NEGATIVE, FALL_2, GENDER_MALE, AMOUNT_UNKNOWN));
    this.pronouns.set('žádná', new PronounProps(PRONOUN_TYPE_NEGATIVE, FALL_2, GENDER_FEMALE, AMOUNT_UNKNOWN));
    this.pronouns.set('žádné', new PronounProps(PRONOUN_TYPE_NEGATIVE, FALL_2, GENDER_MIDDLE, AMOUNT_UNKNOWN));
  }

  analyze(token: Token) {
    if (token.kind !== TK_UNKNOWN) {
      return;
    }
    const text: string = token.text.toLowerCase().trim();

    this.pronouns.forEach((value, key) => {
      if (key === text) {
        token.kind = TK_PRONOUN;
        token.type = value.type;
        token.gender = value.gender;
        token.fall = value.fall;
        token.amount = value.amount;
        return;
      }
    });
  }

}
