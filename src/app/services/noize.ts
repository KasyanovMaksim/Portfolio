import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from '../tokens/window.token';

interface NoiseLayer {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  offsetX: number;
  offsetY: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
}

@Injectable({ providedIn: 'root' })
export class NoiseService {
  private layers: NoiseLayer[] = [];
  private parentEl: HTMLElement | null = null;
  private animationId = 0;
  private frameCount = 0;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) {}

  attachNoiseToElement(el: HTMLElement, options?: {
    color?: string;
    opacity?: number;
    speed?: number;
  }) {
    this.parentEl = el;
    el.style.position = 'relative';
    el.style.overflow = 'hidden';

    this.removeNoise();

    const layerCount = 3;
    const opacity = options?.opacity ?? 0.03;
    const speed = options?.speed ?? 0.5;
    const color = options?.color ?? '#FFFFFF';

    for (let i = 0; i < layerCount; i++) {
      const canvas = this.document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) continue;

      canvas.style.position = 'absolute';
      canvas.style.width = 'calc(100% + 20px)';
      canvas.style.height = 'calc(100% + 20px)';
      canvas.style.left = '-10px';
      canvas.style.top = '-10px';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '0';
      canvas.style.opacity = `${opacity}`;

      el.appendChild(canvas);

      const layer: NoiseLayer = {
        canvas,
        ctx,
        offsetX: 0,
        offsetY: 0,
        targetX: Math.random() * 5,
        targetY: Math.random() * 5,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed
      };

      this.layers.push(layer);
    }

    this.resizeAll();
    this.animate(color);
    this.window.addEventListener('resize', this.resizeAll);
  }

  private resizeAll = () => {
    if (!this.parentEl) return;

    const w = this.parentEl.offsetWidth;
    const h = this.parentEl.offsetHeight;

    this.layers.forEach(layer => {
      // Увеличиваем канвас на 20px (по 10 с каждой стороны)
      layer.canvas.width = w + 20;
      layer.canvas.height = h + 20;
      layer.canvas.style.left = '-10px';
      layer.canvas.style.top = '-10px';
    });
  };

  private animate = (color: string) => {
    this.frameCount++;

    this.layers.forEach(layer => {
      const { ctx, canvas } = layer;

      if (this.frameCount % 120 === 0) {
        layer.targetX = Math.random() * 5;
        layer.targetY = Math.random() * 5;
      }

      // интерполяция к цели
      layer.offsetX += (layer.targetX - layer.offsetX) * 0.05;
      layer.offsetY += (layer.targetY - layer.offsetY) * 0.05;

      const w = canvas.width;
      const h = canvas.height;
      const imageData = ctx.createImageData(w, h);
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);

      for (let i = 0; i < imageData.data.length; i += 4) {
        const noise = Math.random() * 255;
        imageData.data[i] = (r + noise) / 2;
        imageData.data[i + 1] = (g + noise) / 2;
        imageData.data[i + 2] = (b + noise) / 2;
        imageData.data[i + 3] = 255;
      }
      ctx.putImageData(imageData, 0, 0);

      layer.canvas.style.transform = `translate(${layer.offsetX}px, ${layer.offsetY}px)`;
    });

    this.animationId = this.window.requestAnimationFrame(() => this.animate(color));
  };

  removeNoise() {
    if (typeof this.window.cancelAnimationFrame === 'function') {
      this.window.cancelAnimationFrame(this.animationId);
    }
    this.layers.forEach(layer => {
      layer.canvas.remove();
    });
    this.layers = [];
    this.window.removeEventListener('resize', this.resizeAll);
  }
}
