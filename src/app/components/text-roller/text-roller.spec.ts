import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextRoller } from './text-roller';

describe('TextRoller', () => {
  let component: TextRoller;
  let fixture: ComponentFixture<TextRoller>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextRoller]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextRoller);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
