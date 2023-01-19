import { TestBed } from '@angular/core/testing';

import { PermissesGuard } from './permisses.guard';

describe('PermissesGuard', () => {
  let guard: PermissesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PermissesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
