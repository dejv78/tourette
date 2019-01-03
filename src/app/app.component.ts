import {ApplicationRef, ChangeDetectorRef, Component, NgZone} from '@angular/core';
import {AnalysisService} from '../../projects/lex/src/lib/analysis.service';
import {AnalysisResult} from '../../projects/lex/src/lib/model/analysis-result';
import {DecoService} from '../../projects/lex/src/lib/deco.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  text: string = '';
  analysis: AnalysisResult = new AnalysisResult([], false);
  result: string = '';
  inProgress = false;

  constructor(private analyzer: AnalysisService, private decorator: DecoService, private zone: NgZone) {
  }

  onTextChanged(text: string) {
    this.text = text;
  }

  mod() {
    this.inProgress = true;
    this.result = null;
    console.log('ON');
    setTimeout(() => {
      this.modify().then(() => {
        console.log('OFF');
        this.inProgress = false;
      });
    }, 10);
  }

  modify() {
    return new Promise(async(resolve) => {
      this.analysis = await this.analyzer.analyze(this.text, null);
      this.inProgress = true;
      this.result = await this.decorator.decorate(this.analysis);
      resolve();
    });
  }

}
