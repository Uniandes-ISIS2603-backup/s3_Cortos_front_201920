import { TestBed } from '@angular/core/testing';

import { CortoService } from './corto.service';

describe('CortoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CortoService = TestBed.get(CortoService);
    expect(service).toBeTruthy();
  });
});
