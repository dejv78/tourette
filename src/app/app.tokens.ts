import {FileLoaderService} from '@d78ng/file-loader';
import {InjectionToken} from '@angular/core';

export const DATA_SONGS: InjectionToken<FileLoaderService> = new InjectionToken<FileLoaderService>("data.songs");
export const DATA_DICT: InjectionToken<FileLoaderService> = new InjectionToken<FileLoaderService>("data.dict");
export const DATA_DICTP: InjectionToken<FileLoaderService> = new InjectionToken<FileLoaderService>("data.dict.p");
