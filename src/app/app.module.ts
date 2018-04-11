import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppHeaderLogoComponent } from './app-header/app-header-logo.component';
import { AppHeaderPhoneComponent } from './app-header/app-header-phone.component';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppHeaderLogoComponent,
    AppHeaderPhoneComponent,
    AppMenuComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
