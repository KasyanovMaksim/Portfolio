import { TestBed } from '@angular/core/testing';

import { Noize } from './noize';

describe('Noize', () => {
  let service: Noize;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Noize);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
