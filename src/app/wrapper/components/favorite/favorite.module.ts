import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FavoriteComponent } from './favorite/favorite.component';



@NgModule({
  declarations: [
    FavoriteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        pathMatch: 'full',
        component: FavoriteComponent
      }
    ])
  ]
})
export class FavoriteModule { }
