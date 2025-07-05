import { Component, Input, inject } from '@angular/core';
import { ModalService } from '../../../../../services/modal/modal';
import { CaseContent, CaseData } from '../case-content/case-content';
import {NgIf} from '@angular/common';


@Component({
  selector: 'app-ease-way',
  standalone: true,
  templateUrl: './ease-way.html',
  imports: [CaseContent, NgIf],
})
export class EaseWayComponent {
  @Input() mode: 'card' | 'modal' = 'card';

  private modal = inject(ModalService);

  caseData: CaseData = {
    title: 'EaseWay Travel',
    description: 'A platform for accessible trip planning.',
    image: '/assets/easeway/preview.jpg',
    tags: ['Accessibility', 'Travel', 'UX'],
    slides: [
      '/assets/easeway/slide1.jpg',
      '/assets/easeway/slide2.jpg',
      '/assets/easeway/slide3.jpg'
    ]
  };

  open() {
    this.modal.openModal(EaseWayComponent, { mode: 'modal' });
  }
}
