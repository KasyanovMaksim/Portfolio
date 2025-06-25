import {
  Directive,
  ElementRef,
  OnInit,
  OnDestroy,
  Renderer2,
  Inject,
  HostListener,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[appNoiseBackground]',
  standalone: true,
})
export class NoiseBackgroundDirective implements OnInit, OnDestroy {
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D | null;
  private animationId: any;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.createCanvas();
    this.resizeCanvas();
    this.animateNoise();
  }

  @HostListener('window:resize')
  onResize() {
    this.resizeCanvas();
  }

  private createCanvas(): void {
    this.canvas = this.renderer.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.renderer.setStyle(this.canvas, 'position', 'absolute');
    this.renderer.setStyle(this.canvas, 'top', '0');
    this.renderer.setStyle(this.canvas, 'left', '0');
    this.renderer.setStyle(this.canvas, 'width', '100%');
    this.renderer.setStyle(this.canvas, 'height', '100%');
    this.renderer.setStyle(this.canvas, 'z-index', '-1');
    this.renderer.setStyle(this.canvas, 'pointer-events', 'none');
    this.renderer.setStyle(this.canvas, 'opacity', '0.05');

    this.renderer.setStyle(this.el.nativeElement, 'position', 'relative');
    this.renderer.appendChild(this.el.nativeElement, this.canvas);
  }

  private resizeCanvas(): void {
    this.canvas.width = this.el.nativeElement.offsetWidth;
    this.canvas.height = this.el.nativeElement.offsetHeight;
  }

  private animateNoise(): void {
    const draw = () => {
      if (!this.ctx) return;

      const imageData = this.ctx.createImageData(this.canvas.width, this.canvas.height);
      for (let i = 0; i < imageData.data.length; i += 4) {
        const shade = Math.random() * 255;
        imageData.data[i] = shade;
        imageData.data[i + 1] = shade;
        imageData.data[i + 2] = shade;
        imageData.data[i + 3] = 10; // Прозрачность
      }
      this.ctx.putImageData(imageData, 0, 0);
      this.animationId = requestAnimationFrame(draw);
    };
    draw();
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationId);
    this.renderer.removeChild(this.el.nativeElement, this.canvas);
  }
}
