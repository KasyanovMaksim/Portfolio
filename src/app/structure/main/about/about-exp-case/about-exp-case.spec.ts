import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutExpCase } from './about-exp-case';

describe('AboutExpCase', () => {
  let component: AboutExpCase;
  let fixture: ComponentFixture<AboutExpCase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutExpCase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutExpCase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
