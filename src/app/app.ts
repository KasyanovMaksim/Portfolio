import {
  Component,
  ElementRef,
  AfterViewInit,
  inject,
  PLATFORM_ID,
  Inject
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Header } from './structure/header/header';
import { Main } from './structure/main/main';
import { Footer } from './structure/footer/footer';
import { ViewportNoiseService } from './services/noize';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Main, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  protected title = 'Portfolio';

  private el = inject(ElementRef<HTMLElement>);
  private platformId = inject(PLATFORM_ID);

  constructor(private noise: ViewportNoiseService) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.noise.attach({
        color: '#FFFFFF',
        opacity: 0.02,
        grainSize: 1.4,
        density: 0.8,
        layerCount: 6,
        frameDuration: 150,
        maxOffsetPercent: 0.99
      });
    }
  }



}
