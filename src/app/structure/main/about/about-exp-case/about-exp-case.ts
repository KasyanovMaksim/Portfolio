import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-about-exp-case',
  imports: [],
  templateUrl: './about-exp-case.html',
  styleUrl: './about-exp-case.scss'
})
export class AboutExpCase {
  @Input() period!: string;
  @Input() role!: string;
  @Input() place!: string;
}
