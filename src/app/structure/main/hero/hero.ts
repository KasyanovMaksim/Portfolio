import {Component, signal} from '@angular/core';
import {LocalTime} from './local-time/local-time';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {NgIf} from '@angular/common';

@Component({
  selector: 'section-hero',
  imports: [
    LocalTime,
    NgIf
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  isMobile = signal(false);

  constructor(private observer: BreakpointObserver) {
    this.observer.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile.set(result.matches);
    });
  }
}
