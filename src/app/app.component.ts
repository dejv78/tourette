import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  text: string = '';
  result: string = '';

  onSongChanged(text: string) {
    console.log('Text: ' + text);
    this.text = text;
  }

  modify() {
    this.result = this.text;
  }
}
