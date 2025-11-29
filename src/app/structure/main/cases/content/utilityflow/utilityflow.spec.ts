import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Utilityflow } from './utilityflow';

describe('Utilityflow', () => {
  let component: Utilityflow;
  let fixture: ComponentFixture<Utilityflow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Utilityflow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Utilityflow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
