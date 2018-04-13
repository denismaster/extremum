import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafehtmlPipe } from './pipes/safehtml.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SafehtmlPipe],
  exports:[SafehtmlPipe]
})
export class SharedModule { }
