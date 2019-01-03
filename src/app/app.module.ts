import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatProgressSpinnerModule, MatTabsModule, MatToolbarModule, MatTooltipModule} from '@angular/material';
import { AnalysisComponent } from './components/analysis/analysis.component';
import {DATA_DICT, DATA_DICTP, DATA_SONGS} from './app.tokens';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FileLoaderService} from '@d78ng/file-loader';
import { SongSelectorComponent } from './components/song-selector/song-selector.component';
import {AnalysisService} from 'lex';
import { AnalysisTokenComponent } from './components/analysis-token/analysis-token.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {environment} from '../environments/environment';
import {DecoService} from '../../projects/lex/src/lib/deco.service';

export function createFLSInstance(http: HttpClient) {
  return new FileLoaderService(http);
}

export function init(songs: FileLoaderService, dict: FileLoaderService, dictp: FileLoaderService) {
  return () => {
    return new Promise(async(resolve) => {
      console.log('LOC ' + location);
      try {
        await Promise.all([
          songs.load(location + 'assets/songs.json'),
          dict.load(location + 'assets/dictionary.json'),
          dictp.load(location + 'assets/dictionary_prepositions.json'),
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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
  ],
  declarations: [
    AppComponent,
    AnalysisComponent,
    SongSelectorComponent,
    AnalysisTokenComponent,
  ],
  providers: [
    {provide: DATA_SONGS, useFactory: createFLSInstance, deps: [HttpClient]},
    {provide: DATA_DICT, useFactory: createFLSInstance, deps: [HttpClient]},
    {provide: DATA_DICTP, useFactory: createFLSInstance, deps: [HttpClient]},
    {provide: APP_INITIALIZER, useFactory: init, deps:[DATA_SONGS, DATA_DICT, DATA_DICTP], multi: true},
    AnalysisService,
    DecoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
