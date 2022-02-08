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
  sneakers$: Observable<ISneakersCard[]>;
  addedToCart: boolean;
  favorite: boolean;

  constructor( private sneakersService: SneakersService ) {
    this.sneakers$ = this.sneakersService.getSneakers();
    this.addedToCart = false;
    this.favorite = false;
  }

  ngOnInit(): void {
    this.sneakers$.subscribe(
      data => {
        console.log(data);
      }
    )
  }

  addingToCart(): boolean {
    return this.addedToCart = !this.addedToCart
  }

  addingToFavorite(): boolean {
    return this.favorite = !this.favorite
  }
}
