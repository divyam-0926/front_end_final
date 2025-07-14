import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DayDetail {
  id?: string;
  tripName: string;
  description: string;
  days: number;
  dayNumber: number;
  date: string;
  places: string;
  expense: number;
}

@Injectable({
  providedIn: 'root'
})
export class TripDaysService {
  private baseUrl = 'https://2bd227980592.ngrok-free.app/api/trips/days';

  constructor(private http: HttpClient) {}

  getTripDays(): Observable<DayDetail[]> {
    return this.http.get<DayDetail[]>(this.baseUrl);
  }

  addTripDays(days: DayDetail[]): Observable<DayDetail[]> {
    return this.http.post<DayDetail[]>(this.baseUrl, days);
  }

  updateTripDay(id: string, day: DayDetail): Observable<DayDetail> {
    return this.http.put<DayDetail>(`${this.baseUrl}/${id}`, day);
  }

  deleteTripDay(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
