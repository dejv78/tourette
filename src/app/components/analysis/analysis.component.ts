import {Component, Input, OnInit} from '@angular/core';
import {AnalysisResult} from 'lex';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {

  @Input()
  analysis: AnalysisResult;

  constructor() { }

  ngOnInit() {
  }

}
