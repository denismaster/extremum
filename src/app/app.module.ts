import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppHeaderLogoComponent } from './app-header/app-header-logo.component';
import { AppHeaderPhoneComponent } from './app-header/app-header-phone.component';
import { HomeModule } from './home/home.module';
import { ProductsModule } from './products/products.module';
import { SecurityModule } from './security/security.module';
import { JobsModule } from './jobs/jobs.module';
import { AboutModule } from './about/about.module';
import { AppRoutingModule } from './app-routing.module';


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
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ProductsModule,
    SecurityModule,
    JobsModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
