import {createReducer, on, Action} from '@ngrx/store';

import {AuthStateInterface} from '@app/auth/types/authState.interface';
import {
  signupAction,
  signupErrorAction,
  signupSuccessAction,
} from '@app/auth/store/actions/signup.action';
import {
  loginAction,
  loginErrorAction,
  loginSuccessAction,
} from '@app/auth/store/actions/login.action';
import {
  getCurrentUserAction,
  getCurrentUserErrorAction,
  getCurrentUserSuccessAction,
} from '@app/auth/store/actions/currentUser.action';

const initialState: AuthStateInterface = {
  isSent: false,
  currentUser: null,
  isLogged: null,
  validationError: null,
  isLoading: null,
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
  ),
  on(
    loginAction,
    (state): AuthStateInterface => ({
      ...state,
      isSent: true,
      validationError: null,
    })
  ),
  on(
    loginErrorAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSent: false,
      validationError: action.errors,
    })
  ),
  on(
    loginSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSent: false,
      currentUser: action.currentUser,
      isLogged: true,
    })
  ),
  on(
    getCurrentUserAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getCurrentUserErrorAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoading: false,
      currentUser: null,
      isLogged: false,
    })
  ),
  on(
    getCurrentUserSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isLoading: false,
      currentUser: action.currentUser,
      isLogged: true,
    })
  )
);

// use this approach because of Angular JIT
export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
