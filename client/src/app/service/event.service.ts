// event.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEvent } from '../models/clientInterface';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private apiUrl = 'http://localhost:5166';

  constructor(private http: HttpClient) {}

  getAllEvent(): Observable<{ data: IEvent[] }> {
    return this.http.get<{ data: IEvent[] }>(this.apiUrl + '/api/Event/GetAll');
  }

  getEventByID(ID: number): Observable<{ data: IEvent }> {
    return this.http.get<{ data: IEvent }>(
      `${this.apiUrl}/api/Event/ViewEventByID/${ID}`
    );
  }
}
