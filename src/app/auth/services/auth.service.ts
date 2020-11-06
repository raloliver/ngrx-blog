import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {environment} from '@env/environment';
import {SignupRequestInterface} from '@app/auth/types/signupRequest.interface';
import {AuthResponseInterface} from '@app/auth/types/authResponse.interface';
import {CurrentUserInterface} from '@shared/types/currentUser.interface';

@Injectable()
export class AuthService {
  url = environment.apiURL;

  constructor(private http: HttpClient) {}

  signup(data: SignupRequestInterface): Observable<CurrentUserInterface> {
    return this.http
      .post<AuthResponseInterface>(this.url + '/users', data)
      .pipe(map((response: AuthResponseInterface) => response.user));
  }
}
