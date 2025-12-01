import {Component, ElementRef, signal, ViewChild} from '@angular/core';
import {Availability} from './local-time/availability';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {NgIf} from '@angular/common';
import {TextRoller} from '../../../components/text-roller/text-roller';
import {Divider} from '../../../components/divider/divider';

@Component({
  selector: 'section-hero',
  imports: [
    Availability,
    NgIf,
    TextRoller,
    Divider
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  isMobile = signal(false);

  @ViewChild('topText') topTextRef!: ElementRef<HTMLElement>;
  @ViewChild('botText') botTextRef!: ElementRef<HTMLElement>;
  @ViewChild('topContainer') topContainerRef!: ElementRef<HTMLElement>;
  @ViewChild('midContainer') midContainerRef!: ElementRef<HTMLElement>;
  @ViewChild('botContainer') botContainerRef!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    window.addEventListener('scroll', this.onScroll.bind(this));
    this.onScroll(); // 🔄 инициализация позиции на старте
  }
  private scrollTicking = false;

  private onScroll(): void {
    if (!this.scrollTicking) {
      this.scrollTicking = true;
      requestAnimationFrame(() => {
        this.updateTextPosition();
        this.scrollTicking = false;
      });
    }
  }

  private updateTextPosition(): void {
    const scrollY = window.scrollY;

    const scrollOffset = Math.max(scrollY - 100, 0);
    const shift = Math.min(scrollOffset, 200);
    const opacity = Math.max(1 - scrollY * 0.004, 0);

    if (this.topTextRef) {
      this.topTextRef.nativeElement.style.transform = `translateY(-${shift}px)`;
    }

    if (this.botTextRef) {
      this.botTextRef.nativeElement.style.transform = `translateY(${shift}px)`;
    }

    if (this.midContainerRef) {
      this.midContainerRef.nativeElement.style.opacity = `${opacity}`;
    }

  }
  constructor(private observer: BreakpointObserver) {
    this.observer.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile.set(result.matches);
    });
  }
}
