import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
})
export class ItineraryComponent implements OnInit {
  destinations: number[] = [1, 2, 3, 4, 5];
  tripName = '';
  startDate = '';
  endDate = '';
  catImageUrl = '/assets/poki';
  constructor(private router: Router) {}
  ngOnInit() {}
  onDestinationClick(destinationNumber: number) {
    this.router.navigate(['/day', destinationNumber]);
  }
  addDestination() {
    const nextNumber = this.destinations.length > 0
      ? Math.max(...this.destinations) + 1
      : 1;
    this.destinations.push(nextNumber);
  }
}