import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-destination-card',
  templateUrl: './destination-card.component.html',
  styleUrls: ['./destination-card.component.css']
})
export class DestinationCardComponent {
  @Input() title!: string;
  @Input() startDate!: string;
  @Input() endDate!: string;
  @Input() image!: string;
  @Input() days: string[] = [];
  @Input() details: { icon: string; title: string; desc: string }[] = [];
  showDetails = false;
  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}