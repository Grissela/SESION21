import { TestBed } from '@angular/core/testing';

import { SinguardarGuard } from './singuardar.guard';

describe('SinguardarGuard', () => {
  let guard: SinguardarGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SinguardarGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
