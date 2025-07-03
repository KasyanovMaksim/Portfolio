import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalTime } from './local-time';

describe('LocalTime', () => {
  let component: LocalTime;
  let fixture: ComponentFixture<LocalTime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalTime]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalTime);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
