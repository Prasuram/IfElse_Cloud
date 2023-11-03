import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';


@NgModule({
  declarations: [
    SidebarComponent,
    TopbarComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
})
export class LayoutModule { }
