import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) {}

  get_vehicle(plate:string|null): Observable<any> {
    return this.http.get<any>(`${config.api}/vehicle/${plate}/`)
  }
  get_vehicles(): Observable<any> {
    return this.http.get<any>(`${config.api}/vehicle/`)
  }
  new_vehicle(vehicle: { plate: string, brand:string, color:string, }): Observable<any> {
    return this.http.post<any>(`${config.api}/vehicle/`, vehicle )
  }
  edit_vehicle(vehicle: { brand: string, color:string, person:number }, plate:string|null): Observable<any> {
    return this.http.put<any>(`${config.api}/vehicle/${plate}/`, vehicle )
  }
  delete_vehicle(plate:string|null): Observable<any> {
    return this.http.delete<any>(`${config.api}/vehicle/${plate}/`)
  }
}
