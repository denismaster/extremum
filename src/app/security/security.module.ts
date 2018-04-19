import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { SecurityComponent } from './security.component';
import { SecurityInfoComponent } from './components/security-info/security-info.component';

@NgModule({
  imports: [
    CommonModule,
    SecurityRoutingModule
  ],
  declarations: [SecurityComponent, SecurityInfoComponent]
})
export class SecurityModule { }
