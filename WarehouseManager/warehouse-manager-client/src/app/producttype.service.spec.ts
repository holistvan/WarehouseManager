import { TestBed } from '@angular/core/testing';

import { ProducttypeService } from './producttype.service';

describe('ProducttypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProducttypeService = TestBed.get(ProducttypeService);
    expect(service).toBeTruthy();
  });
});
