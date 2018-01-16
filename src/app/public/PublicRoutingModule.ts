import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { HomeComponent } from './components/home/home.component';
import { HistoryComponent } from './components/history/history.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ContactComponent } from './components/contact/contact.component';
import { ImagesComponent } from './components/images/images.component';

const appRoutes: Routes = [
  {
    path: 'public',
    component: PublicComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'calendar', component: CalendarComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'images', component: ImagesComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PublicRoutingModule {}
