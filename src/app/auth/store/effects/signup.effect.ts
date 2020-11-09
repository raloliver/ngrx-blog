import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import {createEffect, Actions, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';

import {
  signupAction,
  signupErrorAction,
  signupSuccessAction,
} from '@app/auth/store/actions/signup.action';
import {AuthService} from '@app/auth/services/auth.service';
import {CurrentUserInterface} from '@shared/types/currentUser.interface';
import {HttpErrorResponse} from '@angular/common/http';
import {PersistanceService} from '@shared/services/persistance.service';
import {dispatch} from 'rxjs/internal/observable/pairs';

@Injectable()
export class SignupEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService,
    private router: Router
  ) {}

  signup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signupAction),
      switchMap(({request}) => {
        return this.authService.signup(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            // avoit this inside of effect window.localStorage.setItem('AUTH_TOKEN', currentUser.token);
            this.persistanceService.set('AUTH_TOKEN', currentUser.token);
            return signupSuccessAction({currentUser});
          })
        );
      }),
      catchError((errorResponse: HttpErrorResponse) =>
        of(signupErrorAction({errors: errorResponse.error.errors}))
      )
    )
  );

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(signupSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/');
        })
      ),
    {dispatch: false}
  );
}
