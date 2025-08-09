import {
  Component,
  Input,
  ElementRef,
  ViewChildren,
  QueryList,
  AfterViewInit
} from '@angular/core';

@Component({
  selector: 'app-text-roller',
  templateUrl: './text-roller.html',
  styleUrl: './text-roller.scss'
})
export class TextRoller implements AfterViewInit {
  @Input() text = '';
  @ViewChildren('inner') inners!: QueryList<ElementRef<HTMLElement>>;
  @ViewChildren('charWrapper') wrappers!: QueryList<ElementRef<HTMLElement>>;
  @ViewChildren('char') chars!: QueryList<ElementRef<HTMLElement>>;

  private delayStep = 25;

  constructor(private el: ElementRef) {}

  // 👇 Вот сюда добавь геттер:
  get processedChars(): string[] {
    return this.text.split('').map(char => char === ' ' ? '\u00A0' : char);
  }

  ngAfterViewInit() {
    const inners = this.inners.toArray();
    const wrappers = this.wrappers.toArray();
    const chars = this.chars.toArray();

    chars.forEach((charRef, i) => {
      const height = charRef.nativeElement.offsetHeight;
      wrappers[i].nativeElement.style.height = `${height}px`;
    });

    this.el.nativeElement.addEventListener('mouseenter', () => {
      inners.forEach((inner, i) => {
        const height = chars[i].nativeElement.offsetHeight;
        setTimeout(() => {
          inner.nativeElement.style.transition = `transform 400ms ease`;
          inner.nativeElement.style.transform = `translateY(-${height}px)`;
        }, i * this.delayStep);
      });
    });

    this.el.nativeElement.addEventListener('mouseleave', () => {
      inners.forEach((inner, i) => {
        setTimeout(() => {
          inner.nativeElement.style.transition = `transform 400ms ease`;
          inner.nativeElement.style.transform = `translateY(0)`;
        }, i * this.delayStep);
      });
    });
  }
}
