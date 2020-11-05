import {createAction, props} from '@ngrx/store';

import {ActionTypes} from '@app/auth/store/actionTypes';
import {SignupUserInterface} from '@app/auth/types/signupRequest.interface';

export const signupAction = createAction(
  ActionTypes.SIGNUP,
  props<{request: SignupUserInterface}>()
);
