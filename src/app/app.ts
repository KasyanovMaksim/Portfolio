import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './structure/header/header';
import {Main} from './structure/main/main';
import {Footer} from './structure/footer/footer';
import {NoiseBackgroundDirective} from './directives/noize/noise-background';

@Component({
  selector: 'app-root',

  imports: [
    Header,
    Main,
    Footer,
    NoiseBackgroundDirective
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Portfolio';
}
