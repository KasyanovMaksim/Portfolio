import { Component } from '@angular/core';
import {Hero} from './hero/hero';
import {Summary} from './summary/summary';
import {Cases} from './cases/cases';
import {About} from './about/about';

@Component({
  selector: 'main',
  imports: [
    Hero,
    Summary,
    Cases,
    About
  ],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {

}
