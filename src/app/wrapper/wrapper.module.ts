import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

import { WrapperComponent } from './components/wrapper/wrapper.component';
import { HeaderComponent } from '../wrapper/components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';

import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path:'',
    component: WrapperComponent
  }
]

@NgModule({
  declarations: [
    WrapperComponent,
    HeaderComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    NgbCarouselModule,
  ],
  providers: []
})
export class WrapperModule { }

// TODO: Add ng-bootstrap and add carousel and etc.