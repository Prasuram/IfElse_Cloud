import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { NewUsersComponent } from './new-users/new-users.component';
import { GraphDetailsComponent } from './graph-details/graph-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MainContentComponent,
    SidebarComponent,
    TopbarComponent,
    OrderDetailsComponent,
    NewUsersComponent,
    GraphDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule


  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
