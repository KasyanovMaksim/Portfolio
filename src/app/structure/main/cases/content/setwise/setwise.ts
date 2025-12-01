import {Component, inject, Input} from '@angular/core';
import {CaseContent, CaseData} from '../case-content/case-content';
import {NgIf} from '@angular/common';
import {ModalService} from '../../../../../services/modal/modal';

@Component({
  selector: 'app-setwise',
  standalone: true,
  imports: [CaseContent, NgIf],
  templateUrl: './setwise.html',
  styleUrl: './setwise.scss'
})
export class Setwise {
  @Input() mode: 'card' | 'modal' = 'card';

  private modal = inject(ModalService);

  caseData: CaseData = {
    title: 'SetWise',
    description: 'Personal Training & Progress Planner',
    logo: 'assets/images/cases/utilityflow/UtilityFlow Logo.svg',
    image: 'assets/images/cases/utilityflow/UtilityFlow Preview.png',
    tags: ['Accessibility', 'Travel', 'UX'],
    slides: [
      'assets/images/cases/image 14.png',
      'assets/images/cases/image 15.png',
      'assets/images/cases/image 14.png',
    ]
  };

  open() {
    this.modal.openModal(Setwise, { mode: 'modal' });
  }
}
