import { TestBed } from '@angular/core/testing';

import { NavigationContentService } from './navigation-content.service';

describe('NavigationContentService', () => {
  let service: NavigationContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigationContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
