import { Component } from '@angular/core';
import {Title} from '../../../components/title/title';
import {StructTrackComponent} from './content/struct-track/struct-track';
import {EaseWayComponent} from './content/ease-way/ease-way';
import {DailyHarvestComponent} from './content/daily-harvest/daily-harvest';

@Component({
  selector: 'section-cases',
  imports: [
    Title,
    StructTrackComponent,
    EaseWayComponent,
    DailyHarvestComponent
  ],
  templateUrl: './cases.html',
  styleUrl: './cases.scss'
})
export class Cases {

}
