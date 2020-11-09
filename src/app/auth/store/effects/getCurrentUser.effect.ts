import {Injectable} from '@angular/core';

import {createEffect, Actions, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

import {
  getCurrentUserAction,
  getCurrentUserErrorAction,
  getCurrentUserSuccessAction,
} from '@app/auth/store/actions/currentUser.action';
import {AuthService} from '@app/auth/services/auth.service';
import {CurrentUserInterface} from '@shared/types/currentUser.interface';
import {PersistanceService} from '@shared/services/persistance.service';

@Injectable()
export class GetCurrentUserEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService
  ) {}

  signup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        const token = this.persistanceService.get('AUTH_TOKEN');
        if (!token) {
          return of(getCurrentUserErrorAction() );
        }

        return this.authService.getCurrentUser().pipe(
          map((currentUser: CurrentUserInterface) => {
            return getCurrentUserSuccessAction({currentUser});
          })
        );
      }),
      catchError(() => of(getCurrentUserErrorAction()))
    )
  );
}
