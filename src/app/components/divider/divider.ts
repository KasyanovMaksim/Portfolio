import { Component, Input, OnInit } from '@angular/core';
import {NgClass, NgStyle} from '@angular/common';

@Component({
  selector: 'app-divider',
  imports: [
    NgClass,
    NgStyle
  ],
  templateUrl: './divider.html',
  styleUrl: './divider.scss',
  standalone: true
})
export class Divider {
  @Input() direction: 'ltr' | 'rtl' = 'ltr';

  @Input() color: string = '#ffffff'; // базовый цвет
  @Input() blur: string = '4px';
  @Input() speed: string = '3s';
  @Input() width: string = '40%';
  @Input() opacity: string = '0.5';
  @Input() background: string = 'transparent';

  delay: string = '0s';

  ngOnInit() {
    const random = Math.random() * 2;
    this.delay = `${random.toFixed(2)}s`;
  }

  get glowGradient(): string {
    const rgba = this.hexToRgb(this.color);
    return `linear-gradient(to right,
      rgba(${rgba}, 0.3),
      rgba(${rgba}, 1),
      rgba(${rgba}, 0.3)
    )`;
  }

  private hexToRgb(hex: string): string {
    // Удаление # если есть
    hex = hex.replace('#', '');
    if (hex.length === 3) {
      hex = hex.split('').map((char) => char + char).join('');
    }
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return `${r},${g},${b}`;
  }
}
