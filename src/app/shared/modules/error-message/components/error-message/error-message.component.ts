import {Component, Input, OnInit} from '@angular/core';
import {ApiErrorInterface} from '@shared/types/apiError.interface';

@Component({
  selector: 'nb-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('messages') messagesProps: ApiErrorInterface;
  errorMessages: string[];
  constructor() {}

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.messagesProps).map((name: string) => {
      const messages = this.messagesProps[name].join(' ');
      return `${name} ${messages}`;
    });
  }
}
