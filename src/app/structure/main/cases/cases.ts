import { Component } from '@angular/core';
import {Title} from '../../../components/title/title';
import {TextRoller} from '../../../components/text-roller/text-roller';
import {Divider} from '../../../components/divider/divider';
import {Utilityflow} from './content/utilityflow/utilityflow';
import {SwiftCV} from './content/swiftcv/swiftcv';
import {KinetTrain} from './content/kinettrain/kinettrain';

@Component({
  selector: 'section-cases',
  imports: [
    Title,
    TextRoller,
    Divider,
    Utilityflow,
    SwiftCV,
    KinetTrain
  ],
  templateUrl: './cases.html',
  styleUrl: './cases.scss'
})
export class Cases {

}
