import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class InfractionService {

  constructor(private http: HttpClient) {}

  new_infraction(infraction: { plate: string, timestamp:string, comments:string, }): Observable<any> {
    return this.http.post<any>(`${config.api}/infraction/`, infraction)
  }
}
