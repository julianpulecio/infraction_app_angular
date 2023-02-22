import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class PolicemanService {

  constructor(private http: HttpClient) {}

  get_policemen(): Observable<any> {
    return this.http.get<any>(`${config.api}/policeman/`)
  }
  get_policeman(identification_number:string|null): Observable<any> {
    return this.http.get<any>(`${config.api}/policeman/${identification_number}/`)
  }
  new_policeman(policeman: { name: string, identification_number:string, password:string, confirm_password:string }): Observable<any> {
    return this.http.post<any>(`${config.api}/policeman/`, policeman )
  }
  edit_policeman(policeman: { name: string  }, identification_number:string|null): Observable<any> {
    return this.http.put<any>(`${config.api}/policeman/${identification_number}/`, policeman )
  }
  delete_policeman(identification_number:string|null): Observable<any> {
    return this.http.delete<any>(`${config.api}/policeman/${identification_number}/`)
  }
}
