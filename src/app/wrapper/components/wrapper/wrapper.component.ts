import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { SneakersService } from '../../services/sneakers.service';
import { ISneakersCard } from '../../types/sneakers.interface'

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  public readonly sneakers$: Observable<ISneakersCard[]>;
  public addedToCart: boolean;
  public favorite: boolean;

  constructor( private readonly sneakersService: SneakersService ) {
    this.sneakers$ = this.sneakersService.getSneakers();
    this.addedToCart = false;
    this.favorite = false;
  }

  ngOnInit(): void {}

  public addingToCart(): boolean {
    return this.addedToCart = !this.addedToCart
  }

  public addingToFavorite(): boolean {
    return this.favorite = !this.favorite
  }
}
