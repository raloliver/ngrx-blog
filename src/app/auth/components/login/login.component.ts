import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {loginAction} from '@app/auth/store/actions/login.action';
import {
  isSentSelector,
  validationErrorSelector,
} from '@app/auth/store/selectors';
import {LoginRequestInterface} from '@app/auth/types/loginRequest.interface';
import {ApiErrorInterface} from '@shared/types/apiError.interface';

@Component({
  selector: 'nb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isSent$: Observable<boolean>;
  apiError$: Observable<ApiErrorInterface | null>;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  initializeValues(): void {
    this.isSent$ = this.store.pipe(select(isSentSelector));
    this.apiError$ = this.store.pipe(select(validationErrorSelector));
  }

  onSubmit() {
    const request: LoginRequestInterface = {
      user: this.form.value,
    };
    this.store.dispatch(loginAction({request}));
  }
}
