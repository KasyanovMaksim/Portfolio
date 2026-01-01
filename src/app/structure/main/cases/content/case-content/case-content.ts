import {
  Component,
  Input,
  computed,
  inject,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnInit,
  OnDestroy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModalService} from '../../../../../services/modal/modal';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

Swiper.use([Navigation, Pagination]);

export type CaseMode = 'card' | 'modal';

export interface CaseData {
  title: string;
  description: string;
  overview: string;
  logo: string;
  image: string;
  tags: string[];
  slides: string[];
  contribution: string[];
  links: {
    designLanding: string;
    designMobileApp: string;
    website: string;
  };
}

@Component({
  selector: 'app-case-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './case-content.html',
  styleUrl: './case-content.scss',
})
export class CaseContent implements AfterViewInit, OnInit, OnDestroy {
  @Input({ required: true }) mode!: CaseMode;
  @Input({ required: true }) data!: CaseData;

  @Input() titleBg?: string;
  @Input() previewBg?: string;

  readonly isCard = computed(() => this.mode === 'card');
  readonly modal = inject(ModalService);

  private keyListener = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && this.mode === 'modal') {
      this.modal.closeModal();
    }
  };

  ngOnInit() {
    window.addEventListener('keydown', this.keyListener);
  }

  ngOnDestroy() {
    window.removeEventListener('keydown', this.keyListener);
  }

  ngAfterViewInit() {
    const swiper = new Swiper('.swiper', {
      loop: true,
      direction: 'horizontal',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletClass: 'case-modal__bullet',
        bulletActiveClass: 'case-modal__bullet-active',
      },
    });
  }
}
