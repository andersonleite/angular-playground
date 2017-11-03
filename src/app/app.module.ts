import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderModule } from './header/header-service.module';
import { HeaderService } from './header/header.service';
import { headerInjectables } from './header/header.injectables';
import { youTubeSearchInjectables } from './search/youtube-search.injectables';
import { YouTubeSearchComponent } from './search/youtube-search.component';
import { SearchResultComponent } from './search/search-result.component';
import { SearchBoxComponent } from './search/search-box.component';
import { CircleComponent } from './circle/circle.component';
import { AboutComponent } from './about/about.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { RollbarErrorHandler, rollbarFactory } from './rollbar/rollbar';
import * as Rollbar from 'rollbar';

const routes: Routes = [
  {path: 'home', redirectTo: '/', pathMatch: 'full'},
  {path: 'youtube', component: YouTubeSearchComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'about/:id', component: AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    YouTubeSearchComponent,
    SearchResultComponent,
    SearchBoxComponent,
    CircleComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HeaderModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    HeaderService,
    headerInjectables,
    youTubeSearchInjectables,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    { provide: ErrorHandler, useClass: RollbarErrorHandler },
    { provide: Rollbar,  useFactory: rollbarFactory }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
