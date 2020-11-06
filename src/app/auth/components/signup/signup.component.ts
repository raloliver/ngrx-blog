import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {signupAction} from '@app/auth/store/actions/signup.action';
import {isSentSelector} from '@app/auth/store/selectors';
import {SignupRequestInterface} from '@app/auth/types/signupRequest.interface';

@Component({
  selector: 'nb-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  isSent$: Observable<boolean>;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  initializeValues(): void {
    this.isSent$ = this.store.pipe(select(isSentSelector));
  }

  onSubmit() {
    console.log(this.form.value);
    const request: SignupRequestInterface = {
      user: this.form.value,
    };
    this.store.dispatch(signupAction({request}));
  }
}
