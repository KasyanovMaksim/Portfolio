import { Component, OnDestroy, OnInit, computed, signal } from '@angular/core';
import { NgIf } from '@angular/common';
import { TimeService } from '../../../../services/time/time';

@Component({
  selector: 'app-local-time',
  standalone: true,
  imports: [NgIf],
  templateUrl: './local-time.html',
  styleUrl: './local-time.scss'
})
export class LocalTime implements OnInit, OnDestroy {
  readonly time = signal('');
  readonly suffix = signal('');
  readonly gmt = signal('');
  readonly timeDiff = signal(0);
  readonly showDiff = computed(() => this.timeDiff() !== 0);

  private intervalId: any;

  constructor(private timeService: TimeService) {}

  ngOnInit(): void {
    this.timeDiff.set(this.timeService.getTimeDifference());
    this.gmt.set(this.timeService.getUkraineGmtLabel());
    this.updateTime();
    this.intervalId = setInterval(() => this.updateTime(), 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  updateTime(): void {
    const { time, suffix } = this.timeService.getTimeParts();
    this.time.set(time);
    this.suffix.set(suffix);
  }
}
