import { Component, Input, Signal, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

export type CaseMode = 'card' | 'modal';

export interface CaseData {
  title: string;
  description: string;
  image: string;
  tags: string[];
  slides: string[];
}

@Component({
  selector: 'app-case-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './case-content.html',
  styleUrl: './case-content.scss'
})
export class CaseContent {
  @Input({ required: true }) mode!: CaseMode;
  @Input({ required: true }) data!: CaseData;

  readonly isCard = computed(() => this.mode === 'card');
}
