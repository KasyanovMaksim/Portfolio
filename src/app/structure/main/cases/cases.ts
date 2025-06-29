import { Component } from '@angular/core';
import {Title} from '../../../components/title/title';
import {Case} from './case/case';

@Component({
  selector: 'section-cases',
  imports: [
    Title,
    Case
  ],
  templateUrl: './cases.html',
  styleUrl: './cases.scss'
})
export class Cases {

}
