import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {environment} from '@env/environment';
import {SignupRequestInterface} from '@app/auth/types/signupRequest.interface';
import {AuthResponseInterface} from '@app/auth/types/authResponse.interface';
import {LoginRequestInterface} from '@app/auth/types/loginRequest.interface';
import {CurrentUserInterface} from '@shared/types/currentUser.interface';

@Injectable()
export class AuthService {
  url = environment.apiURL;

  constructor(private http: HttpClient) {}

  getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user;
  }

  signup(data: SignupRequestInterface): Observable<CurrentUserInterface> {
    return this.http
      .post<AuthResponseInterface>(this.url + '/users', data)
      .pipe(map(this.getUser));
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiURL + '/users/login';
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser));
  }

  getCurrentUser(): Observable<CurrentUserInterface> {
    const url = environment.apiURL + '/user';
    return this.http.get(url).pipe(map(this.getUser));
  }
}
