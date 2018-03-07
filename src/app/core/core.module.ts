import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from 'angularfire2';
import { environment } from './../../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthService } from './services/auth/auth.service';
import { OnlyAuthenticatedGuard } from './guards/only-authenticated.guard';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  exports: [
    AngularFireModule,
    AngularFireAuthModule
  ],
  declarations: [],
  providers: [
    AuthService,
    OnlyAuthenticatedGuard
  ]
})
export class CoreModule { // Ensure that CoreModule is only loaded into AppModule
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if(parent) {
      throw new Error(`${parent.constructor.name} has already been loaded. Import this module in the AppModule only.`)
    }
  }
}