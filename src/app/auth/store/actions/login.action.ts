import {createAction, props} from '@ngrx/store';

import {ActionTypes} from '@app/auth/store/actionTypes';
import {LoginRequestInterface} from '@app/auth/types/loginRequest.interface';
import {CurrentUserInterface} from '@shared/types/currentUser.interface';
import {ApiErrorInterface} from '@shared/types/apiError.interface';

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{request: LoginRequestInterface}>()
);

export const loginErrorAction = createAction(
  ActionTypes.LOGIN_ERROR,
  props<{errors: ApiErrorInterface}>()
);

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{currentUser: CurrentUserInterface}>()
);
