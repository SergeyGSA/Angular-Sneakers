import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { UserComponent } from './user/user.component'

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        pathMatch: 'full',
        component: UserComponent
      }
    ])
  ]
})
export class UserModule { }
