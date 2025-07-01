import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from '../tokens/window.token';

interface VirtualLayer {
  pattern: CanvasPattern;
  opacity: number;
  offsetX1: number;
  offsetX2: number;
  offsetY1: number;
  offsetY2: number;
  direction: boolean;
  frameDuration: number;
  lastTimestamp: number;
}

@Injectable({ providedIn: 'root' })
export class ViewportNoiseService {
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private layers: VirtualLayer[] = [];
  private animationId = 0;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) {}

  attach(options?: {
    color?: string;
    opacity?: number;
    grainSize?: number;
    density?: number;
    layerCount?: number;
    frameDuration?: number;
    maxOffsetPercent?: number;
  }) {
    if (this.canvas) return;

    const grainSize = options?.grainSize ?? 2;
    const baseOpacity = options?.opacity ?? 0.03;
    const color = options?.color ?? '#FFFFFF';
    const layerCount = options?.layerCount ?? 6;
    const density = Math.max(0, Math.min(1, options?.density ?? 1));
    const frameDuration = options?.frameDuration ?? 800;
    const maxOffsetPercent = options?.maxOffsetPercent ?? 0.0015;

    // Create canvas
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

    const width = this.window.innerWidth;
    const height = this.window.innerHeight;

    // Layers with different directions and offsets
    this.layers = Array.from({ length: layerCount }, (_, i) => {
      const tile = this.generateGrainTile(grainSize, color, density);
      const pattern = ctx.createPattern(tile, 'repeat')!;

      const offsetStepX = width * maxOffsetPercent * (i + 1);
      const offsetStepY = height * maxOffsetPercent * (i + 1);

      const isEven = i % 2 === 0;

      return {
        pattern,
        opacity: baseOpacity,
        offsetX1: isEven ? -offsetStepX : 0,
        offsetX2: isEven ? offsetStepX : 0,
        offsetY1: isEven ? 0 : -offsetStepY,
        offsetY2: isEven ? 0 : offsetStepY,
        direction: true,
        frameDuration,
        lastTimestamp: performance.now(),
      };
    });

    this.window.addEventListener('resize', this.resizeCanvas);
    this.animate();
  }

  private generateGrainTile(grainSize: number, color: string, density: number): HTMLCanvasElement {
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
        if (Math.random() > density) continue;

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

    const now = performance.now();
    const { width, height } = canvas;
    ctx.clearRect(0, 0, width, height);

    for (const layer of this.layers) {
      const delta = now - layer.lastTimestamp;

      if (delta >= layer.frameDuration) {
        layer.direction = !layer.direction;
        layer.lastTimestamp = now;
      }

      const offsetX = layer.direction ? layer.offsetX1 : layer.offsetX2;
      const offsetY = layer.direction ? layer.offsetY1 : layer.offsetY2;

      ctx.save();
      ctx.translate(offsetX, offsetY);
      ctx.globalAlpha = layer.opacity;
      ctx.fillStyle = layer.pattern;
      ctx.fillRect(-offsetX, -offsetY, width, height);
      ctx.restore();
    }

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
