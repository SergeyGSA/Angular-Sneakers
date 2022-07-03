import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ISneakers } from 'src/app/wrapper/types/sneakers.interface';

@Injectable({
  providedIn: 'root'
})
export class SneakersService {

  constructor( private readonly http: HttpClient ) { }

  public getSneakers(): Observable<ISneakers[]> {
    const url = `${environment.API_URL}/sneakers`
    return this.http.get<ISneakers[]>(url)
  }

  public getSneakersById(id: string): Observable<ISneakers> {
    const url = `${environment.API_URL}/sneakers/${id}`
    return this.http.get<ISneakers>(url)
  }
}
