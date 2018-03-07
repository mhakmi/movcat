import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { OnlyAuthenticatedGuard } from './core/guards/only-authenticated.guard';

const app_routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  { 
    path: 'home',
    component: HomePageComponent
  }, 
  {
    path: 'auth',
    loadChildren: 'app/auth/auth.module#AuthModule'
  },
  {
    path: 'catalogue',
    loadChildren: 'app/catalogue/catalogue.module#CatalogueModule',
    canActivate: [OnlyAuthenticatedGuard] //Only Authenticated/Registred users can access to the Catalogue App.
  },
  { path: '**', pathMatch: 'full', redirectTo: '/home' } // catch any unfound routes and redirect to home page
];

@NgModule({
  imports: [ RouterModule.forRoot(app_routes, {
      useHash: true
    }) 
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
