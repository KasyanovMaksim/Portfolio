import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructTrack } from './struct-track';

describe('StructTrack', () => {
  let component: StructTrack;
  let fixture: ComponentFixture<StructTrack>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructTrack]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructTrack);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
