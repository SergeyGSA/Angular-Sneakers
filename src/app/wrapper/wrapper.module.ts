import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';

//   Components
import { WrapperComponent } from 'src/app/wrapper/components/wrapper/wrapper.component';
import { HeaderComponent } from 'src/app/wrapper/components/header/header.component';
import { CarouselComponent } from 'src/app/wrapper/components/carousel/carousel.component';
import { SearchComponent } from 'src/app/wrapper/components/search/search.component';
import { SortingComponent } from 'src/app/wrapper/components/sorting/sorting.component';
//   /Components

//   NgBootstrap
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
//   /NgBootstrap

//   Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
//   /Angular Material


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
    SortingComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    NgbModule,
    NgbCarouselModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: []
})
export class WrapperModule { }
