import { TestBed } from '@angular/core/testing';

import { ProductgroupService } from './productgroup.service';

describe('ProductgroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductgroupService = TestBed.get(ProductgroupService);
    expect(service).toBeTruthy();
  });
});
