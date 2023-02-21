import { HttpClient, HttpParameterCodec, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from './../../config';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) {}

  get_report(form_data: any): Observable<any> {
    return this.http.get<any>(`${config.api}/person/generar_informe/${form_data.email}/`)
  }

  get_persons(): Observable<any> {
    return this.http.get<any>(`${config.api}/person/`)
  }
}
