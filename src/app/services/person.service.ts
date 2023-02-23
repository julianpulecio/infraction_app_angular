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
  get_person(email:string|null): Observable<any> {
    return this.http.get<any>(`${config.api}/person/${email}/`)
  }
  get_persons(): Observable<any> {
    return this.http.get<any>(`${config.api}/person/`)
  }
  new_person(person: { email: string, name:string }): Observable<any> {
    return this.http.post<any>(`${config.api}/person/`, person )
  }
  edit_person(person: { name: string  }, email:string|null): Observable<any> {
    return this.http.put<any>(`${config.api}/person/${email}/`, person )
  }
  delete_person(email:string|null): Observable<any> {
    return this.http.delete<any>(`${config.api}/person/${email}/`)
  }
}
