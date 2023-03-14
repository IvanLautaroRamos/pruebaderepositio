import { TestBed } from '@angular/core/testing';

import { PruebaunoService } from './pruebauno.service';

describe('PruebaunoService', () => {
  let service: PruebaunoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PruebaunoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
