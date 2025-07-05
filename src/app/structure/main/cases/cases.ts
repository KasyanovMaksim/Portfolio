import { Component } from '@angular/core';
import {Title} from '../../../components/title/title';
import {StructTrack} from './content/struct-track/struct-track';
import {EaseWayComponent} from './content/ease-way/ease-way';
import {DailyHarvest} from './content/daily-harvest/daily-harvest';

@Component({
  selector: 'section-cases',
  imports: [
    Title,
    StructTrack,
    EaseWayComponent,
    DailyHarvest
  ],
  templateUrl: './cases.html',
  styleUrl: './cases.scss'
})
export class Cases {

}
