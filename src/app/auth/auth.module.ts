import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {StoreModule} from '@ngrx/store';

import {RegisterComponent} from '@app/auth/components/register/register.component';
import {reducers} from '@app/auth/store/reducers';

const routes: Routes = [
  {
    path: 'signup',
    component: RegisterComponent,
  },
];

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', reducers),
  ],
})
export class AuthModule {}
