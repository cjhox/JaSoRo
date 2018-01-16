import { NgModule, ModuleWithProviders } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HistoryComponent } from './components/history/history.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ContactComponent } from './components/contact/contact.component';
import { ImagesComponent } from './components/images/images.component';
import { NewsComponent } from './components/news/news.component';
import { PublicComponent } from './public.component';
import { PublicRoutingModule } from './PublicRoutingModule';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    HistoryComponent,
    CalendarComponent,
    ContactComponent,
    ImagesComponent,
    NewsComponent,
    PublicComponent
  ],
  imports: [
    PublicRoutingModule
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
    HistoryComponent,
    CalendarComponent,
    ContactComponent,
    ImagesComponent,
    NewsComponent
  ],
  providers: [ ]
})
export class PublicModule {
  static forRoot(config?: {}): ModuleWithProviders {
    return {
      ngModule: PublicModule,
      providers: [ ]
    };
  }
}
