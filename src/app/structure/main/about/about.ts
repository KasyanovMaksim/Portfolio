import { Component } from '@angular/core';
import {Surface} from "../../../components/surface/surface";
import {Title} from "../../../components/title/title";

@Component({
  selector: 'section-about',
    imports: [
        Surface,
        Title
    ],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {

}
