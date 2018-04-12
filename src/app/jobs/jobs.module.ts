import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import { JobsListComponent } from './components/jobs-list/jobs-list.component';
import { JobsCardComponent } from './components/jobs-card/jobs-card.component';

@NgModule({
  imports: [
    CommonModule,
    JobsRoutingModule,
    HttpClientModule
  ],
  declarations: [JobsComponent, JobsListComponent, JobsCardComponent]
})
export class JobsModule { }
