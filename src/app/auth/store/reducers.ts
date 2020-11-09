import {createReducer, on, Action} from '@ngrx/store';

import {AuthStateInterface} from '@app/auth/types/authState.interface';
import {
  signupAction,
  signupErrorAction,
  signupSuccessAction,
} from '@app/auth/store/actions/signup.action';

const initialState: AuthStateInterface = {
  isSent: false,
  currentUser: null,
  isLogged: null,
  validationError: null,
};

const authReducer = createReducer(
  initialState,
  on(
    signupAction,
    (state): AuthStateInterface => ({
      ...state,
      isSent: true,
      validationError: null,
    })
  ),
  on(
    signupErrorAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSent: false,
      validationError: action.errors,
    })
  ),
  on(
    signupSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSent: false,
      currentUser: action.currentUser,
      isLogged: true,
    })
  )
);

// use this approach because of Angular JIT
export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
