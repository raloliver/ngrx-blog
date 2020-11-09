import {createAction, props} from '@ngrx/store';

import {ActionTypes} from '@app/auth/store/actionTypes';
import {SignupRequestInterface} from '@app/auth/types/signupRequest.interface';
import {CurrentUserInterface} from '@shared/types/currentUser.interface';
import {ApiErrosInterface} from '@shared/types/apiErros.interface';

export const signupAction = createAction(
  ActionTypes.SIGNUP,
  props<{request: SignupRequestInterface}>()
);

export const signupErrorAction = createAction(
  ActionTypes.SIGNUP_ERROR,
  props<{errors: ApiErrosInterface}>()
);

export const signupSuccessAction = createAction(
  ActionTypes.SIGNUP_SUCCESS,
  props<{currentUser: CurrentUserInterface}>()
);