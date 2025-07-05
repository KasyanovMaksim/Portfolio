import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EaseWay } from './ease-way';

describe('EaseWay', () => {
  let component: EaseWay;
  let fixture: ComponentFixture<EaseWay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EaseWay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EaseWay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
