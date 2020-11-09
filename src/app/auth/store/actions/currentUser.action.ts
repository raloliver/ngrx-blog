import {createAction, props} from '@ngrx/store';

import {ActionTypes} from '@app/auth/store/actionTypes';
import {CurrentUserInterface} from '@shared/types/currentUser.interface';

export const getCurrentUserAction = createAction(ActionTypes.GET_CURRENT_USER);
export const getCurrentUserErrorAction = createAction(
  ActionTypes.GET_CURRENT_USER_ERROR
);
export const getCurrentUserSuccessAction = createAction(
  ActionTypes.GET_CURRENT_USER_SUCCESS,
  props<{currentUser: CurrentUserInterface}>()
);
