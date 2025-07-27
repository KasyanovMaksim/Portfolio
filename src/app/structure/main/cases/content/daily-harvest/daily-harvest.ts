import { Component, Input, inject } from '@angular/core';
import { ModalService } from '../../../../../services/modal/modal';
import { CaseContent, CaseData } from '../case-content/case-content';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-daily-harvest',
  imports: [CaseContent, NgIf],
  templateUrl: './daily-harvest.html',
  styleUrl: './daily-harvest.scss'
})
export class DailyHarvestComponent {
  @Input() mode: 'card' | 'modal' = 'card';

  private modal = inject(ModalService);

  caseData: CaseData = {
    title: 'Daily Harvest',
    description: 'UI/UX design of a plant-based food delivery platform, focusing on personalization and reordering experience.',
    logo: 'assets/images/cases/logo/dailyharvest-logo.svg',
    image: '/assets/daily-harvest/preview.jpg',
    tags: ['UI Redesign', 'E-commerce', 'Food Tech'],
    slides: [
      '/assets/images/cases/image 14.png',
      '/assets/images/cases/image 15.png',
      '/assets/images/cases/image 14.png',
    ]
  };

  open() {
    this.modal.openModal(DailyHarvestComponent, { mode: 'modal' });
  }
}
