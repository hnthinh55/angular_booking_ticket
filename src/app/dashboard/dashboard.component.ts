import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  airports: any[] = [];
  constructor(private dashboarService: DashboardService) {}

  ngOnInit(): void {
    this.dashboarService.getAirport().subscribe({
      next: (data) => (this.airports = data),
    });
  }
}
