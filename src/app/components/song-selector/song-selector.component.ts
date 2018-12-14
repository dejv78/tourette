import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {DATA_SONGS} from '../../app.tokens';
import {FileLoaderService} from '@d78ng/file-loader';
import {Song} from '../../model/song';

@Component({
  selector: 'app-song-selector',
  templateUrl: './song-selector.component.html',
  styleUrls: ['./song-selector.component.scss']
})
export class SongSelectorComponent {

  @Output()
  onSongChanged: EventEmitter<string> = new EventEmitter();

  public songs: Song[];

  constructor(@Inject(DATA_SONGS) songFile: FileLoaderService) {
    this.songs = songFile.data.songs;
  }

  setSong(song?: Song) {
    if (song) {
      this.onSongChanged.emit(song.lyrics);
    } else {
      this.onSongChanged.emit('');
    }
  }
}
