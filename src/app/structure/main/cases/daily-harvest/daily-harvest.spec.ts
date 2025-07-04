import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyHarvest } from './daily-harvest';

describe('DailyHarvest', () => {
  let component: DailyHarvest;
  let fixture: ComponentFixture<DailyHarvest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyHarvest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyHarvest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
