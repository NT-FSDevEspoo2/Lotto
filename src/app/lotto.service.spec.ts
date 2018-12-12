import { TestBed } from '@angular/core/testing';

import { LottoService } from './lotto.service';

describe('LottoTicketsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LottoService = TestBed.get(LottoService);
    expect(service).toBeTruthy();
  });
});
