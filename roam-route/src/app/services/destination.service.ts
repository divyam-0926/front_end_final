import { Injectable } from '@angular/core';
import { Destination } from '../models/destination.model';
@Injectable({
  providedIn: 'root'
})
export class DestinationService {
  private storageKey = 'destinations';

  getDestinations(): Destination[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  saveDestinations(destinations: Destination[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(destinations));
  }
}