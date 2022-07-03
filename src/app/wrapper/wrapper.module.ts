import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'

import { MainPageModule } from 'src/app/wrapper/components/main-page/main-page.module'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    MainPageModule,
  ],
})
export class WrapperModule { }
