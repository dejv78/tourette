import {FileLoaderService} from '@d78ng/file-loader';
import {InjectionToken} from '@angular/core';

export const DATA_SONGS: InjectionToken<FileLoaderService> = new InjectionToken<FileLoaderService>("data.songs");
