// src/app/structure/modal/modal.component.ts
import {
  Component,
  ViewChild,
  ViewContainerRef,
  Injector,
  EnvironmentInjector,
  signal,
  inject,
  ChangeDetectionStrategy,
  AfterViewInit,
  ComponentRef
} from '@angular/core';
import { ModalService } from '../../services/modal/modal';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent implements AfterViewInit {
  private envInjector = inject(EnvironmentInjector);
  private injector = inject(Injector);
  public modalService = inject(ModalService);

  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  isVisible = signal(false);
  private currentComponentRef: ComponentRef<unknown> | null = null;

  ngAfterViewInit(): void {
    this.modalService.register(this);
  }

  show(component: any, props: Record<string, any> = {}) {
    this.container.clear();

    const componentRef = this.container.createComponent<any>(component, {
      environmentInjector: this.envInjector,
      injector: this.injector,
    });

    Object.assign(componentRef.instance, props);
    this.currentComponentRef = componentRef;

    this.isVisible.set(true);
  }

  hide() {
    this.container.clear();
    this.currentComponentRef = null;
    this.isVisible.set(false);
  }

  handleBackgroundClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-wrapper')) {
      this.modalService.closeModal();
    }
  }
}
