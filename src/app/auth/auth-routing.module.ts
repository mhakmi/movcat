import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: IndexComponent,
    children: [
      {
        path: '', redirectTo: 'login', pathMatch: 'full',
      },
      {
        path: 'login', component: LoginComponent,
      },
      {
        path: 'signup', component: SignupComponent,
      },
      {
        path: '**', redirectTo: 'login', pathMatch: 'full',
      }
    ]
  },
  {
    path: '**', redirectTo: 'auth/login', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
