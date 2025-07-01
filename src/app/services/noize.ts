import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from '../tokens/window.token';

interface VirtualLayer {
  pattern: CanvasPattern;
  t: number;
  speed: number;
  baseSpeed: number;
  phase: number;
  opacity: number;
  lastUpdate: number;
}

@Injectable({ providedIn: 'root' })
export class ViewportNoiseService {
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private layers: VirtualLayer[] = [];
  private animationId = 0;
  private updateFrequency = 1000;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) {}

  attach(options?: {
    color?: string;
    opacity?: number;
    grainSize?: number;
    speed?: number;
    layerCount?: number;
    updateFrequency?: number;
  }) {
    if (this.canvas) return;

    const grainSize = options?.grainSize ?? 2;
    const baseOpacity = options?.opacity ?? 0.03;
    const color = options?.color ?? '#FFFFFF';
    const baseSpeed = options?.speed ?? 0.2;
    const layerCount = options?.layerCount ?? 6;
    this.updateFrequency = options?.updateFrequency ?? 1000;

    this.canvas = this.document.createElement('canvas');
    const ctx = this.canvas.getContext('2d');
    if (!ctx) return;
    this.ctx = ctx;

    Object.assign(this.canvas.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
      zIndex: '9999',
      pointerEvents: 'none',
    });

    this.document.body.appendChild(this.canvas);
    this.resizeCanvas();

    const now = Date.now();

    this.layers = Array.from({ length: layerCount }, () => {
      const tile = this.generateGrainTile(grainSize, color);
      const pattern = ctx.createPattern(tile, 'repeat');
      const layerBaseSpeed = baseSpeed * (0.5 + Math.random()); // сохраняем навсегда

      return {
        pattern: pattern!,
        t: Math.random() * 1000,
        baseSpeed: layerBaseSpeed,
        speed: layerBaseSpeed,
        phase: Math.random() * Math.PI * 2,
        opacity: baseOpacity,
        lastUpdate: now,
      };
    });

    this.window.addEventListener('resize', this.resizeCanvas);
    this.animate();
  }

  private generateGrainTile(grainSize: number, color: string): HTMLCanvasElement {
    const tile = this.document.createElement('canvas');
    tile.width = 300;
    tile.height = 300;
    const ctx = tile.getContext('2d');
    if (!ctx) return tile;

    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);

    for (let y = 0; y < tile.height; y += grainSize) {
      for (let x = 0; x < tile.width; x += grainSize) {
        const noise = Math.random() * 255;
        ctx.fillStyle = `rgb(${(r + noise) / 2}, ${(g + noise) / 2}, ${(b + noise) / 2})`;
        ctx.fillRect(x, y, grainSize, grainSize);
      }
    }

    return tile;
  }

  private resizeCanvas = () => {
    if (!this.canvas) return;
    this.canvas.width = this.window.innerWidth;
    this.canvas.height = this.window.innerHeight;
  };

  private animate = () => {
    const ctx = this.ctx;
    const canvas = this.canvas;
    if (!ctx || !canvas) return;

    const { width, height } = canvas;
    const now = Date.now();

    ctx.clearRect(0, 0, width, height);

    this.layers.forEach(layer => {
      // Смена направления и скорости
      if (now - layer.lastUpdate >= this.updateFrequency) {
        layer.phase = Math.random() * Math.PI * 2;
        layer.speed = layer.baseSpeed * (0.8 + Math.random() * 0.4); // ±20%
        layer.lastUpdate = now;
      }

      layer.t += 0.01;

      const offsetX = Math.sin(layer.t + layer.phase) * 2 * layer.speed;
      const offsetY = Math.cos(layer.t + layer.phase) * 2 * layer.speed;

      ctx.save();
      ctx.translate(offsetX, offsetY);
      ctx.globalAlpha = layer.opacity;
      ctx.fillStyle = layer.pattern;
      ctx.fillRect(-offsetX, -offsetY, width, height);
      ctx.restore();
    });

    this.animationId = this.window.requestAnimationFrame(this.animate);
  };

  remove() {
    if (this.animationId) {
      this.window.cancelAnimationFrame(this.animationId);
      this.animationId = 0;
    }

    if (this.canvas) {
      this.canvas.remove();
      this.canvas = null;
    }

    this.ctx = null;
    this.layers = [];
    this.window.removeEventListener('resize', this.resizeCanvas);
  }
}
