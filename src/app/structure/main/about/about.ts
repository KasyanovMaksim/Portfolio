import { Component } from '@angular/core';
import {Surface} from "../../../components/surface/surface";
import {Title} from "../../../components/title/title";
import {LinksList} from '../../../components/links-list/links-list';
import {AboutExpCase} from './about-exp-case/about-exp-case';
import {NgOptimizedImage} from '@angular/common';
import {Divider} from "../../../components/divider/divider";
import {TextRoller} from "../../../components/text-roller/text-roller";


@Component({
  selector: 'section-about',
    imports: [
        Surface,
        Title,
        LinksList,
        AboutExpCase,
        NgOptimizedImage,
        Divider,
        TextRoller,

    ],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {

}
