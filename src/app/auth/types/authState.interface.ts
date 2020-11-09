import {ApiErrosInterface} from '@shared/types/apiErros.interface';
import {CurrentUserInterface} from '@shared/types/currentUser.interface';

export interface AuthStateInterface {
  isSent: boolean;
  currentUser: CurrentUserInterface | null;
  isLogged: boolean | null;
  validationError: ApiErrosInterface | null;
}
