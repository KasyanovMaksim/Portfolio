import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TimeService {
  private readonly ukraineTimeZone = 'Europe/Kyiv';

  getTimeParts(): { time: string; suffix: string } {
    const parts = new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit', // ← теперь с секундами
      hour12: true,
      timeZone: this.ukraineTimeZone
    }).split(' ');

    return {
      time: parts[0],     // "10:09:42"
      suffix: parts[1]    // "AM" или "PM"
    };
  }

  getTimeDifference(): number {
    const now = new Date();
    const localTime = now.getTime();
    const ukraineTime = new Date(
      now.toLocaleString('en-US', { timeZone: this.ukraineTimeZone })
    ).getTime();
    const diffMs = localTime - ukraineTime;
    const diffHours = Math.round(diffMs / (1000 * 60 * 60));
    return -diffHours;
  }

  getUkraineGmtLabel(): string {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: this.ukraineTimeZone,
      timeZoneName: 'shortOffset'
    });
    const parts = formatter.formatToParts(new Date());
    return parts.find(p => p.type === 'timeZoneName')?.value || 'GMT+3';
  }

  shouldShowTimeDifference(): boolean {
    return this.getTimeDifference() !== 0;
  }
}
