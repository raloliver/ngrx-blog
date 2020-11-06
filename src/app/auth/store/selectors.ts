import {createFeatureSelector, createSelector} from '@ngrx/store';

import {AppStateInterface} from '@shared/types/appState.interface';
import {AuthStateInterface} from '@app/auth/types/authState.interface';

// avoid unknow type
export const authFeatureSelector = createFeatureSelector<
  AppStateInterface,
  AuthStateInterface
>('auth');

export const isSentSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSent
);
