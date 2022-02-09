import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { API_URL } from 'src/environments/environment';
import { ISneakersCard } from 'src/app/wrapper/types/sneakers.interface';

@Injectable({
  providedIn: 'root'
})
export class SneakersService {

  constructor( private readonly _http: HttpClient ) { }

  public getSneakers(): Observable<ISneakersCard[]> {
    return this._http.get<ISneakersCard[]>(`${API_URL}/sneakers`)
  }
}
