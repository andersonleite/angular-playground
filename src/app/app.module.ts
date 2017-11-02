import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
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
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
