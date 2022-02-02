import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

import { WrapperComponent } from './components/wrapper/wrapper.component';
import { HeaderComponent } from '../wrapper/components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SearchComponent } from './components/search/search.component';
import { SortingComponent } from './components/sorting/sorting.component';

import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

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
    CarouselComponent,
    SearchComponent,
    SortingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    NgbCarouselModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
  ],
  providers: []
})
export class WrapperModule { }
