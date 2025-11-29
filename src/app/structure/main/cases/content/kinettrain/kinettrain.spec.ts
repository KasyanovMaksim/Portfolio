import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kinettrain } from './kinettrain';

describe('Kinettrain', () => {
  let component: Kinettrain;
  let fixture: ComponentFixture<Kinettrain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kinettrain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kinettrain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
