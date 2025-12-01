import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Setwise } from './setwise';

describe('Setwise', () => {
  let component: Setwise;
  let fixture: ComponentFixture<Setwise>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Setwise]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Setwise);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
