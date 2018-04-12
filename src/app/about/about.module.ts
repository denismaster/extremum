import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { RequisitesComponent } from './requisites/requisites.component';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  declarations: [RequisitesComponent, AboutComponent]
})
export class AboutModule { }
