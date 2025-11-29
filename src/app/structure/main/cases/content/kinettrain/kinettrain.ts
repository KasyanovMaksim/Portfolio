import {Component, inject, Input} from '@angular/core';
import {ModalService} from '../../../../../services/modal/modal';
import {CaseContent, CaseData} from '../case-content/case-content';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-kinettrain',
  standalone: true,
  imports: [CaseContent, NgIf],
  templateUrl: './kinettrain.html',
  styleUrl: './kinettrain.scss'
})
export class KinetTrain {
  @Input() mode: 'card' | 'modal' = 'card';

  private modal = inject(ModalService);

  caseData: CaseData = {
    title: 'KinetTrain',
    description: 'Build personalized workout plans based on your goals, time, equipment, and experience. Track progress, log workouts, and see real results through adaptive training cycles and clear performance insights.',
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
    this.modal.openModal(KinetTrain, { mode: 'modal' });
  }
}
