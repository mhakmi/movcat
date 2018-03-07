import { ToasterModule } from 'angular2-toaster';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { NbLayoutModule, NbRouteTabsetModule, NbCardModule } from '@nebular/theme';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './index.component';

const themeModules = [
  NbLayoutModule,
  NbRouteTabsetModule,
  NbCardModule,
  NbRouteTabsetModule
]

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,

    ...themeModules,

    ToasterModule.forChild(),
  ],
  declarations: [LoginComponent, SignupComponent, IndexComponent]
})
export class AuthModule { }
