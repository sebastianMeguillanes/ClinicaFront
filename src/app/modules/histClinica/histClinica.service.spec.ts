import { TestBed } from '@angular/core/testing';

import { HistClinicaService } from './histClinica.service';

describe('HistService', () => {
  let service: HistClinicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistClinicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
