import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequisitesComponent } from './requisites/requisites.component';

const routes: Routes = [{
  path: "about/requisites",
  component: RequisitesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
