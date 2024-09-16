import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeedComponent } from './views/feed/feed.component';
import { UserLayoutComponent } from './views/user-layout/user-layout.component';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [AppComponent, FeedComponent, UserLayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   SharedModule,MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}