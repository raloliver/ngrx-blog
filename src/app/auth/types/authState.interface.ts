import {ApiErrorInterface} from '@shared/types/apiError.interface';
import {CurrentUserInterface} from '@shared/types/currentUser.interface';

export interface AuthStateInterface {
  isSent: boolean;
  currentUser: CurrentUserInterface | null;
  isLogged: boolean | null;
  validationError: ApiErrorInterface | null;
}
