import {Injectable} from '@angular/core';

import {createEffect, Actions, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

import {
  signupAction,
  signupErrorAction,
  signupSuccessAction,
} from '@app/auth/store/actions/signup.action';
import {AuthService} from '@app/auth/services/auth.service';
import {CurrentUserInterface} from '@shared/types/currentUser.interface';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class SignupEffect {
  constructor(private actions$: Actions, private authService: AuthService) {}

  signup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signupAction),
      switchMap(({request}) => {
        return this.authService
          .signup(request)
          .pipe(
            map((currentUser: CurrentUserInterface) =>
              signupSuccessAction({currentUser})
            )
          );
      }),
      catchError((errorResponse: HttpErrorResponse) =>
        of(signupErrorAction({errors: errorResponse.error.errors}))
      )
    )
  );
}
