import {
  Component,
  ViewChild,
  ViewContainerRef,
  inject,
  EnvironmentInjector,
  Type
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal/modal';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.html',
  styleUrl: './modal.scss'
})
export class ModalComponent {
  private modal = inject(ModalService);
  private injector = inject(EnvironmentInjector);

  @ViewChild('container', { read: ViewContainerRef, static: true })
  private container!: ViewContainerRef;

  ngAfterViewInit() {
    this.modal.registerHost(this.container);
  }

  get isOpen() {
    return this.modal.isOpen();
  }

  close() {
    this.modal.close();
  }

  onOverlayClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.close();
    }
  }
}
