import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import {createEffect, Actions, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';

import {
  loginAction,
  loginErrorAction,
  loginSuccessAction,
} from '@app/auth/store/actions/login.action';
import {AuthService} from '@app/auth/services/auth.service';
import {CurrentUserInterface} from '@shared/types/currentUser.interface';
import {HttpErrorResponse} from '@angular/common/http';
import {PersistanceService} from '@shared/services/persistance.service';

@Injectable()
export class LoginEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService,
    private router: Router
  ) {}

  signup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({request}) => {
        return this.authService.login(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.persistanceService.set('AUTH_TOKEN', currentUser.token);
            return loginSuccessAction({currentUser});
          })
        );
      }),
      catchError((errorResponse: HttpErrorResponse) =>
        of(loginErrorAction({errors: errorResponse.error.errors}))
      )
    )
  );

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/');
        })
      ),
    {dispatch: false}
  );
}
