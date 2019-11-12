import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'paypal-web',
    pathMatch: 'full'
  },
  {
    path: 'paypal',
    loadChildren: './paypal/paypal.module#PaypalPageModule'
  },
  {
    path: 'paypal-web',
    loadChildren: './paypal-web/paypal.module#PaypalPageModule'
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
