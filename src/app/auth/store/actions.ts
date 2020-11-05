import {createAction, props} from '@ngrx/store';

import {ActionTypes} from '@app/auth/store/actionTypes';

export const signupAction = createAction(
  ActionTypes.SIGNUP,
  props<{usename: string; email: string; password: string}>()
);
