import {Component, OnInit} from '@angular/core';

import {Store} from '@ngrx/store';

import {getCurrentUserAction} from '@app/auth/store/actions/currentUser.action';

@Component({
  selector: 'nb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getCurrentUserAction());
  }
}
