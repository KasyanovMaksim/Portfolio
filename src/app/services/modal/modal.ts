import {
  Injectable,
  Signal,
  WritableSignal,
  computed,
  signal
} from '@angular/core';
import { ModalComponent } from '../../structure/modal/modal';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalRef: ModalComponent | null = null;

  private isOpenSignal: WritableSignal<boolean> = signal(false);
  public readonly isOpen: Signal<boolean> = computed(() => this.isOpenSignal());

  private componentType: any = null;
  private componentProps: Record<string, any> = {};

  register(modal: ModalComponent) {
    this.modalRef = modal;
  }

  openModal(component: any, props: Record<string, any> = {}) {
    if (!this.modalRef) throw new Error('ModalComponent is not registered yet.');
    this.componentType = component;
    this.componentProps = props;
    this.modalRef.show(this.componentType, this.componentProps);
    this.isOpenSignal.set(true);
  }

  closeModal() {
    if (!this.modalRef) return;
    this.modalRef.hide();
    this.isOpenSignal.set(false);
  }
}
