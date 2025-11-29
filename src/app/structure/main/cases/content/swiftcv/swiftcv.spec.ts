import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Swiftcv } from './swiftcv';

describe('Swiftcv', () => {
  let component: Swiftcv;
  let fixture: ComponentFixture<Swiftcv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Swiftcv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Swiftcv);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
