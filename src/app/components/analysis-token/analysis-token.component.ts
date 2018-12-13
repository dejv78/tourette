import {Component, Input, OnInit} from '@angular/core';
import {Token} from 'lex';
import {AMOUNT_MULTIPLE, AMOUNT_SINGLE, AMOUNT_UNKNOWN, GENDER_FEMALE, GENDER_FEMALE_MIDDLE, GENDER_MALE, GENDER_MIDDLE, GENDER_UNKNOWN, NUMBER_TYPE_BASIC, NUMBER_TYPE_HAFO, NUMBER_TYPE_KND, NUMBER_TYPE_ROW, PRONOUN_TYPE_NEGATIVE, PRONOUN_TYPE_OWNERSHIP, PRONOUN_TYPE_PERSONAL, PRONOUN_TYPE_POINTING, PRONOUN_TYPE_QUESTION, PRONOUN_TYPE_RELATION, PUNCT_TYPE_END_OF_SENTENCE, TK_CONJUNCTION, TK_EMPTY_LINE, TK_NUMBER, TK_PART, TK_PREPOSITION, TK_PRONOUN, TK_PUNCTUATION} from '../../../../projects/lex/src/lib/model/analysis-result';

@Component({
  selector: 'app-analysis-token',
  templateUrl: './analysis-token.component.html',
  styleUrls: ['./analysis-token.component.scss']
})
export class AnalysisTokenComponent
  implements OnInit {

  @Input()
  token: Token;
  tooltip: string;
  cls: any = {};
  details: string;

  constructor() { }

  ngOnInit() {
    switch (this.token.kind) {
      case TK_PUNCTUATION: {
        this.tooltip = (this.token.type === PUNCT_TYPE_END_OF_SENTENCE) ? "Konec věty" : "Čárka";
        this.cls.punct = true;
        this.details = (this.token.type === PUNCT_TYPE_END_OF_SENTENCE) ? 'kv' : null;
        break;
      }
      case TK_EMPTY_LINE: {
        this.tooltip = "Prázdný řádek";
        this.cls.empty = true;
        break;
      }
      case TK_CONJUNCTION: {
        this.tooltip = "Spojka";
        this.cls.conj = true;
        break;
      }
      case TK_PREPOSITION: {
        this.tooltip = `Předložka, ${this.token.fall}. pád`;
        this.cls.prep = true;
        this.details = `p:${this.token.fall}`;
        break;
      }
      case TK_NUMBER: {
        this.tooltip = `Číslovka, ${AnalysisTokenComponent.numType2str(this.token.type)}, ${AnalysisTokenComponent.gender2str(this.token.gender)} `;
        this.cls.num = true;
        this.details = `t:${this.token.type}  r:${this.token.gender}`;
        break;
      }
      case TK_PRONOUN: {
        this.tooltip = `Zájméno, ${AnalysisTokenComponent.pronounType2str(this.token.type)}, ${AnalysisTokenComponent.gender2str(this.token.gender)}, ${AnalysisTokenComponent.fall2str(this.token.fall)}, , ${AnalysisTokenComponent.amount2str(this.token.amount)}  `;
        this.cls.pronoun = true;
        this.details = `t:${this.token.type}  r:${this.token.gender}  p:${this.token.fall}  č:${this.token.amount}`;
        break;
      }
      case TK_PART: {
        this.tooltip = `Částice`;
        this.cls.part = true;
        break;
      }
      default: {
        this.tooltip = "Neznámé";
      }
    }
  }

  static fall2str(f: string): string {
    return f + '. pád';
  }

  static amount2str(a: string): string {
    switch (a) {
      case AMOUNT_SINGLE: return 'číslo jednotné';
      case AMOUNT_MULTIPLE: return 'číslo množné';
      default: return 'číslo neznámé';
    }
  }

  static numType2str(t: string): string {
    switch (t) {
      case NUMBER_TYPE_HAFO: return 'hafo';
      case NUMBER_TYPE_KND: return 'druhová';
      case NUMBER_TYPE_ROW: return 'řadová';
      default: return 'základní';
    }
  }

  static pronounType2str(t: string): string {
    switch (t) {
      case PRONOUN_TYPE_PERSONAL: return 'osobní';
      case PRONOUN_TYPE_POINTING: return 'ukazovací';
      case PRONOUN_TYPE_QUESTION: return 'tázací';
      case PRONOUN_TYPE_RELATION: return 'vztažné';
      case PRONOUN_TYPE_OWNERSHIP: return 'přivlastňovací';
      case PRONOUN_TYPE_NEGATIVE: return 'záporné';
      default: return 'neurčité';
    }
  }

  static gender2str(g: string): string {
    switch (g) {
      case GENDER_MALE: return 'rod mužský';
      case GENDER_FEMALE: return 'rod ženský';
      case GENDER_MIDDLE: return 'rod střední';
      case GENDER_FEMALE_MIDDLE: return 'rod ženský, nebo střední';
      default: return 'rod neznámý';
    }
  }
}
