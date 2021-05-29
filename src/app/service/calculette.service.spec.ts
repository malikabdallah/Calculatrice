import { TestBed } from '@angular/core/testing';

import { CalculetteService } from './calculette.service';

describe('CalculetteService', () => {
  let service: CalculetteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculetteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
