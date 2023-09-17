import { TestBed } from '@angular/core/testing';

import { ArtPaintingsDataService } from './art-paintings-data.service';

describe('ArtPaintingsDataService', () => {
  let service: ArtPaintingsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtPaintingsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
