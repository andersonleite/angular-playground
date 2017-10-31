import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    YouTubeSearchComponent,
    SearchResultComponent,
    SearchBoxComponent,
    CircleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HeaderModule
  ],
  providers: [
    HeaderService,
    headerInjectables,
    youTubeSearchInjectables
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
