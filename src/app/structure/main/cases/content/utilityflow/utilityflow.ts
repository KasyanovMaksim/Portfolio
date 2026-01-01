import {Component, inject, Input} from '@angular/core';
import {CaseContent, CaseData} from '../case-content/case-content';
import {NgIf} from '@angular/common';
import {ModalService} from '../../../../../services/modal/modal';

@Component({
  selector: 'app-utilityflow',
  standalone: true,
  imports: [CaseContent, NgIf],
  templateUrl: './utilityflow.html',
  styleUrl: './utilityflow.scss'
})
export class Utilityflow {
  @Input() mode: 'card' | 'modal' = 'card';

  private modal = inject(ModalService);
  cardTitleBg = '#0a7b20';
  cardPreviewBg = '#418c34';
  caseData: CaseData = {
    title: 'UtilityFlow',
    description: 'Smart Utility & Rent Tracking',
    overview: 'UtilityFlow is a platform built to streamline rent and utility management, replacing manual spreadsheets, inconsistent reporting, and slow data exchange between tenants and landlords. The system records meter readings, applies time-bounded tariffs, and generates immutable financial snapshots. The result is a modern Angular + Laravel application that delivers accurate calculations, clear dashboards, and an efficient workflow for all user roles.',
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
    this.modal.openModal(Utilityflow, { mode: 'modal' });
  }
}
