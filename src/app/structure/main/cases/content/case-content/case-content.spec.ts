import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseContent } from './case-content';

describe('CaseContent', () => {
  let component: CaseContent;
  let fixture: ComponentFixture<CaseContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
