import { Component, Input, inject } from '@angular/core';
import { ModalService } from '../../../../../services/modal/modal';


@Component({
  selector: 'app-ease-way',
  standalone: true,
  templateUrl: './ease-way.html',
})
export class EaseWayComponent {
  @Input() mode: 'card' | 'modal' = 'card';

  private modal = inject(ModalService);

  open() {
    this.modal.openModal(EaseWayComponent, { mode: 'modal' });
  }
}
