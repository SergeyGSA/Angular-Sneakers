import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CartComponent } from 'src/app/wrapper/components/cart/cart/cart.component';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        pathMatch: 'full',
        component: CartComponent
      }
    ])
  ]
})
export class CartModule { }
