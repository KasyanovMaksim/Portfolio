import {Component, inject, Input} from '@angular/core';
import {ModalService} from '../../../../../services/modal/modal';
import {CaseContent, CaseData} from '../case-content/case-content';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-swiftcv',
  standalone: true,
  imports: [CaseContent, NgIf],
  templateUrl: './swiftcv.html',
  styleUrl: './swiftcv.scss'
})
export class SwiftCV {
  @Input() mode: 'card' | 'modal' = 'card';

  private modal = inject(ModalService);

  caseData: CaseData = {
    title: 'SwiftCV',
    description: 'AI-Driven Resume Builder',
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
    this.modal.openModal(SwiftCV, { mode: 'modal' });
  }
}
