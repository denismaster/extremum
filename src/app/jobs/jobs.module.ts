import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';

@NgModule({
  imports: [
    CommonModule,
    JobsRoutingModule
  ],
  declarations: [JobsComponent]
})
export class JobsModule { }
