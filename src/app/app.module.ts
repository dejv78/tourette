import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatTabsModule, MatToolbarModule} from '@angular/material';
import { AnalysisComponent } from './components/analysis/analysis.component';
import { WordComponent } from './components/word/word.component';
import {DATA_SONGS} from './app.tokens';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FileLoaderService} from '@d78ng/file-loader';
import { SongSelectorComponent } from './components/song-selector/song-selector.component';

export function createFLSInstance(http: HttpClient) {
  return new FileLoaderService(http);
}

export function init(songs: FileLoaderService) {
  return () => {
    return new Promise(async(resolve) => {
      try {
        await Promise.all([
          songs.load('/assets/songs.json'),
        ]);
        resolve(true);
      } catch (error) {
        console.error('Init failed', {error});
        resolve(false);
      }
    });
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
  ],
  declarations: [
    AppComponent,
    AnalysisComponent,
    WordComponent,
    SongSelectorComponent,
  ],
  providers: [
    {provide: DATA_SONGS, useFactory: createFLSInstance, deps: [HttpClient]},
    {provide: APP_INITIALIZER, useFactory: init, deps:[DATA_SONGS], multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
