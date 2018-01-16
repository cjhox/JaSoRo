import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { CalenderComponent } from './calender/calender.component';
import { ContactComponent } from './contact/contact.component';
import { ImagesComponent } from './images/images.component';
import { NewsComponent } from './news/news.component';

@NgModule({  declarations: [
  HeaderComponent,
  HomeComponent,
  HistoryComponent,
  CalenderComponent,
  ContactComponent,
  ImagesComponent,
  NewsComponent
],
  imports: [
    CommonModule
  ]
})
export class PublicModule { }
