import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Surface } from './surface';

describe('Card', () => {
  let component: Surface;
  let fixture: ComponentFixture<Surface>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Surface]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Surface);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
