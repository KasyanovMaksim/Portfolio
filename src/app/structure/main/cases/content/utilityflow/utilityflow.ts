import {Component, inject, Input} from '@angular/core';
import {CaseContent, CaseData} from '../case-content/case-content';
import {NgIf} from '@angular/common';
import {ModalService} from '../../../../../services/modal/modal';

@Component({
  selector: 'app-utilityflow',
  standalone: true,
  imports: [CaseContent, NgIf],
  templateUrl: './utilityflow.html',
  styleUrl: './utilityflow.scss'
})
export class Utilityflow {
  @Input() mode: 'card' | 'modal' = 'card';

  private modal = inject(ModalService);

  caseData: CaseData = {
    title: 'UtilityFlow',
    description: 'A transparent rent and utility management platform empowering tenants, landlords, and agencies with clear, immutable billing data.',
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
    this.modal.openModal(Utilityflow, { mode: 'modal' });
  }
}



