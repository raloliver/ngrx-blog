import {createReducer, on, Action} from '@ngrx/store';

import {AuthStateInterface} from '@app/auth/types/authState.interface';
import {signupAction} from '@app/auth/store/actions';

const initialState: AuthStateInterface = {
  isSent: false,
};

const authReducer = createReducer(
  initialState,
  on(
    signupAction,
    (state): AuthStateInterface => ({
      ...state,
      isSent: true,
    })
  )
);

// use this approach because of Angular JIT
export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
