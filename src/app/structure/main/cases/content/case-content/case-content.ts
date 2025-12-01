import {Component, Input, computed, inject, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
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
  logo: string;
  image: string;
  tags: string[];
  slides: string[];
}

@Component({
  selector: 'app-case-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './case-content.html',
  styleUrl: './case-content.scss',
})
export class CaseContent implements AfterViewInit {
  @Input({ required: true }) mode!: CaseMode;
  @Input({ required: true }) data!: CaseData;


  readonly isCard = computed(() => this.mode === 'card');
  readonly modal = inject(ModalService);
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
