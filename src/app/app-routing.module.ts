import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./wrapper/components/main-page/main-page.module')
      .then(m => m.MainPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./wrapper/components/cart/cart.module')
      .then(m => m.CartModule)
  },
  {
    path: 'favorite',
    loadChildren: () => import('./wrapper/components/favorite/favorite.module')
      .then(m => m.FavoriteModule)
  },
  {
    path: 'user',
    loadChildren: () =>  import('./wrapper/components/user/user.module')
      .then(m => m.UserModule)
  },
  {
    path: '**',
    loadChildren: () => import('./wrapper/components/not-found/not-found.module')
      .then(m => m.NotFoundModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
