import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {SignupComponent} from '@app/auth/components/signup/signup.component';
import {reducers} from '@app/auth/store/reducers';
import {AuthService} from '@app/auth/services/auth.service';
import {SignupEffect} from '@app/auth/store/effects/signup.effect';
import {ErrorMessageModule} from '@shared/modules/error-message/error-message.module';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
  },
];

@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([SignupEffect]),
    ErrorMessageModule,
  ],
  providers: [AuthService],
})
export class AuthModule {}
