import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabFeedComponent} from './components/tab-feed/tab-feed.component';

@NgModule({
  declarations: [TabFeedComponent],
  imports: [CommonModule],
  exports: [TabFeedComponent],
})
export class TabFeedModule {}
