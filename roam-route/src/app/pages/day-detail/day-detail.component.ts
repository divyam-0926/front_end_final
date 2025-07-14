// day-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { TripDaysService, DayDetail } from './trip-days.service';

@Component({
  selector: 'app-day-detail',
  templateUrl: './day-detail.component.html',
  styleUrls: ['./day-detail.component.css']
})
export class DayDetailComponent implements OnInit {
  form: DayDetail = {
    tripName: '',
    description: '',
    days: 1,
    dayNumber: 1,
    date: '',
    places: '',
    expense: 0
  };

  pendingDays: DayDetail[] = [];
  details: DayDetail[] = [];
  editRow: DayDetail | null = null;
  totalExpense: number = 0;

  constructor(private tripDaysService: TripDaysService) {}

  ngOnInit(): void {
    this.tripDaysService.getTripDays().subscribe({
      next: (days: DayDetail[]) => {
        this.details = days;
        this.calculateTotalExpense();
      },
      error: (err) => console.error('Error loading trip days', err)
    });
  }

  addDay(): void {
    this.pendingDays.push({ ...this.form });
    this.form = {
      tripName: '',
      description: '',
      days: 1,
      dayNumber: 1,
      date: '',
      places: '',
      expense: 0
    };
  }

  removePendingDay(index: number): void {
    this.pendingDays.splice(index, 1);
  }

  submitAllDays(): void {
    if (this.pendingDays.length === 0) return;

    this.tripDaysService.addTripDays(this.pendingDays).subscribe({
      next: (savedDays: DayDetail[]) => {
        this.details.push(...savedDays);
        this.pendingDays = [];
        this.calculateTotalExpense();
      },
      error: (err) => {
        console.error('Error saving days', err);
      }
    });
  }

  deleteDetail(id: string): void {
    this.tripDaysService.deleteTripDay(id).subscribe({
      next: () => {
        this.details = this.details.filter((d) => d.id !== id);
        this.calculateTotalExpense();
      },
      error: (err) => {
        console.error('Error deleting day', err);
      }
    });
  }

  startEdit(day: DayDetail): void {
    this.editRow = { ...day };
  }

  saveEdit(): void {
    if (!this.editRow || !this.editRow.id) return;

    console.log('Saving day with ID:', this.editRow.id, this.editRow);

    this.tripDaysService.updateTripDay(this.editRow.id, this.editRow).subscribe({
      next: (updatedDay: DayDetail) => {
        const index = this.details.findIndex(d => d.id === updatedDay.id);
        if (index !== -1) {
          this.details[index] = updatedDay;
        }
        this.editRow = null;
        this.calculateTotalExpense();
      },
      error: (err) => {
        console.error('Error updating day', err);
      }
    });
  }

  cancelEdit(): void {
    this.editRow = null;
  }

  calculateTotalExpense(): void {
    this.totalExpense = this.details.reduce((sum, d) => sum + (d.expense || 0), 0);
  }
}