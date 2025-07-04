import {
  Injectable,
  ViewContainerRef,
  ComponentRef,
  EnvironmentInjector,
  Type,
  inject,
  signal,
  WritableSignal
} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ModalService {
  private container!: ViewContainerRef;
  private componentRef: ComponentRef<any> | null = null;
  private readonly injector = inject(EnvironmentInjector);

  isOpen: WritableSignal<boolean> = signal(false);

  registerHost(container: ViewContainerRef) {
    this.container = container;
  }

  openModal<T>(component: Type<T>, props?: Partial<T>) {
    this.close(); // clear before opening another
    this.componentRef = this.container.createComponent(component, {
      environmentInjector: this.injector
    });

    if (props) Object.assign(this.componentRef.instance, props);

    this.isOpen.set(true);
  }

  close() {
    this.componentRef?.destroy();
    this.container?.clear();
    this.isOpen.set(false);
  }
}
