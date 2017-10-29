import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderModule } from './header/header-service.module';
import { HeaderService } from './header/header.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HeaderModule
  ],
  providers: [
    HeaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
