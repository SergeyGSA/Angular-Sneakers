import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store'

import { SneakersService } from 'src/app/wrapper/services/sneakers.service'
import { ISneakers } from 'src/app/wrapper/types/sneakers.interface'


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public readonly sneakers$: Observable<ISneakers[]>;
  public addedToCart: boolean;
  public isFavorite$?: Observable<boolean>

  constructor
  ( 
    private readonly sneakersService: SneakersService,
    private store: Store<{ favorite: boolean }>
  ) {
    this.sneakers$ = this.sneakersService.getSneakers();
    this.addedToCart = false;
  }

  ngOnInit(): void {}

  public addingToCart(id: string): boolean {
    return this.addedToCart = !this.addedToCart
  }

}
