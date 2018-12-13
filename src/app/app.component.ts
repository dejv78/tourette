import {Component} from '@angular/core';
import {AnalysisService} from '../../projects/lex/src/lib/analysis.service';
import {AnalysisResult} from '../../projects/lex/src/lib/model/analysis-result';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  text: string = '';
  analysis: AnalysisResult = new AnalysisResult([]);
  result: string = '';

  constructor(private analyzer: AnalysisService) {
  }

  onTextChanged(text: string) {
    this.text = text;
  }

  async modify() {
    this.analysis = await this.analyzer.analyze(this.text, null);
    this.result = this.text;
  }
}
