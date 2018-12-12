import { TestBed } from '@angular/core/testing';

import { LexService } from './lex.service';

describe('LexService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LexService = TestBed.get(LexService);
    expect(service).toBeTruthy();
  });
});
