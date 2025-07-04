import { Component } from '@angular/core';
import {Title} from '../../../components/title/title';
import {EaseWay} from './ease-way/ease-way';
import {DailyHarvest} from './daily-harvest/daily-harvest';
import {StructTrack} from './struct-track/struct-track';

@Component({
  selector: 'section-cases',
  imports: [
    Title,
    EaseWay,
    DailyHarvest,
    StructTrack,
  ],
  templateUrl: './cases.html',
  styleUrl: './cases.scss'
})
export class Cases {



}
