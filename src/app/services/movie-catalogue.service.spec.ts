import { TestBed } from '@angular/core/testing';

import { MovieCatalogueService } from './movie-catalogue.service';

describe('MovieCatalogueService', () => {
  let service: MovieCatalogueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieCatalogueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
