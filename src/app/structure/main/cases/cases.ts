import { Component } from '@angular/core';
import {Title} from '../../../components/title/title';
import {StructTrackComponent} from './content/struct-track/struct-track';
import {EaseWayComponent} from './content/ease-way/ease-way';
import {DailyHarvestComponent} from './content/daily-harvest/daily-harvest';
import {TextRoller} from '../../../components/text-roller/text-roller';
import {Divider} from '../../../components/divider/divider';

@Component({
  selector: 'section-cases',
  imports: [
    Title,
    StructTrackComponent,
    EaseWayComponent,
    DailyHarvestComponent,
    TextRoller,
    Divider
  ],
  templateUrl: './cases.html',
  styleUrl: './cases.scss'
})
export class Cases {

}
