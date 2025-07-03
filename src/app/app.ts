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
import { ViewportNoiseService } from './services/noize/noize';

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
      const isMobile = window.innerWidth <= 768; // можно подкорректировать порог
      const desktopOptions = {
        color: '#FFFFFF',
        density: 1,
        layerCount: 12,
        grainSize: 1.4,
        opacity: 0.02,
        frameDuration: 150,
        maxOffsetPercent: 0.09
      };

      const mobileOptions = {
        color: '#FFFFFF',
        density: 0.7,
        layerCount: 8,
        grainSize: 0.6,
        opacity: 0.025,
        frameDuration: 150,
        maxOffsetPercent: 0.99
      };

      this.noise.attach(isMobile ? mobileOptions : desktopOptions);
    }
  }
}
