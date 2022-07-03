import { Injectable } from '@angular/core';
import { ISneakers } from 'src/app/wrapper/types/sneakers.interface';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public addToLocalStorage(sneakers: ISneakers): void {
    window.localStorage.setItem(sneakers.id, JSON.stringify(sneakers))
  }

  public removeFromLocalStorage(sneakers: ISneakers) {
    window.localStorage.removeItem(sneakers.id)
  }
}
