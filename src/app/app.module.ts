import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth/auth.module';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '@env/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    StoreModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
