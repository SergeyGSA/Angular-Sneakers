import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { MainPageComponent } from 'src/app/wrapper/components/main-page/components/main-page/main-page.component'
import { HeaderComponent } from 'src/app/wrapper/components/main-page/components/header/header.component'

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
import { CarouselComponent } from './components/carousel/carousel.component';
import { SortingComponent } from './components/sorting/sorting.component';
import { SearchComponent } from './components/search/search.component';
//   /Angular Material



@NgModule({
  declarations: [
    MainPageComponent,
    HeaderComponent,
    CarouselComponent,
    SortingComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        pathMatch: 'full',
        component: MainPageComponent
      }
    ]),
    NgbModule,
    NgbCarouselModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class MainPageModule { }
