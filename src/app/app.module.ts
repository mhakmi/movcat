import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NbThemeModule } from '@nebular/theme';

import {ToasterModule} from 'angular2-toaster';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, //requried by ng-tag module

    CoreModule, //core module, it's components and services should be singltone.
    
    AppRoutingModule,

    NbThemeModule.forRoot({
      name: 'default',
    }),
    
    ToasterModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
