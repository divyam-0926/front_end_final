import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-day-card',
  templateUrl: './day-card.component.html'
})
export class DayCardComponent {
  @Input() text: string = '';
}