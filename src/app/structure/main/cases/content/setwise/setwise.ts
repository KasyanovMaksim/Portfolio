import {Component, inject, Input} from '@angular/core';
import {CaseContent, CaseData} from '../case-content/case-content';
import {NgIf} from '@angular/common';
import {ModalService} from '../../../../../services/modal/modal';

@Component({
  selector: 'app-setwise',
  standalone: true,
  imports: [CaseContent, NgIf],
  templateUrl: './setwise.html',
  styleUrl: './setwise.scss'
})
export class Setwise {
  @Input() mode: 'card' | 'modal' = 'card';

  private modal = inject(ModalService);

  cardTitleBg = '#3576b6';
  cardPreviewBg = '#346d8c';

  caseData: CaseData = {
    title: 'SetWise',
    description: 'Personal Training & Progress Planner',
    overview: 'UtilityFlow is a platform designed to streamline rent and utility management, replacing outdated spreadsheets, manual tariff calculations, and inconsistent reporting. The system accelerates data exchange between tenants and landlords, improves calculation accuracy, increases transparency, and simplifies data storage. It records monthly meter readings, applies time-bounded tariffs, and generates immutable financial snapshots. The result is a modern Angular + Laravel application providing reliable calculations, clear dashboards, and an efficient workflow for all user types.',
    logo: 'assets/images/cases/utilityflow/UtilityFlow Logo.svg',
    image: 'assets/images/cases/utilityflow/UtilityFlow Preview.png',
    tags: ['Mobile App', 'Landing Page', 'Pitch Deck'],
    slides: [
      'assets/images/cases/image 14.png',
      'assets/images/cases/image 15.png',
      'assets/images/cases/image 14.png',
    ],
    contribution: [
      'Analyzed real utility-tracking processes and translated them into a structured data model.',
      'Defined the application architecture using Angular 20, signals-based state, modular routing, and role-specific read projections.',
      'Designed a clean, mobile-first interface: onboarding, readings input, dashboards, history, and settings.',
      'Created insight components, category color coding, and fast monthly, yearly, and total analytics.',
      'Set up key analytics events: role selection, readings submission, settings changes, and navigation.',
    ],
    links: {
      designLanding: 'http://google.com/',
      designMobileApp: 'http://google.com/',
      website: 'http://google.com/'
    }
  };


  open() {
    this.modal.openModal(Setwise, { mode: 'modal' });
  }
}
