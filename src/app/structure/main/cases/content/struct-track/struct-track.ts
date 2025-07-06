import { Component, Input, inject } from '@angular/core';
import { ModalService } from '../../../../../services/modal/modal';
import { CaseContent, CaseData } from '../case-content/case-content';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-struct-track',
  imports: [CaseContent, NgIf],
  templateUrl: './struct-track.html',
  styleUrl: './struct-track.scss'
})
export class StructTrackComponent {
  @Input() mode: 'card' | 'modal' = 'card';

  private modal = inject(ModalService);

  caseData: CaseData = {
    title: 'StructTrack',
    description: 'A B2B dashboard for managing construction processes: from workers and tools to cost and task tracking.',
    logo: 'assets/images/cases/logo/structtrack-logo.svg',
    image: 'assets/images/cases/logo/dailyharve-logo.svg',
    tags: ['B2B', 'Construction', 'Dashboard'],
    slides: [
      '/assets/struct-track/slide1.jpg',
      '/assets/struct-track/slide2.jpg',
      '/assets/struct-track/slide3.jpg'
    ]
  };

  open() {
    this.modal.openModal(StructTrackComponent, { mode: 'modal' });
  }
}
