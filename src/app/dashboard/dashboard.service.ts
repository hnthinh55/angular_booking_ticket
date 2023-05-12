import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getAirport(): Observable<any[]> {
    return this.http
      .get<any>('https://localhost:7089/api/Airport/airports', {
        withCredentials: true,
      })
      .pipe(
        map((response) => {
          let airports = response.result;
          return airports;
        })
      );
  }
}
