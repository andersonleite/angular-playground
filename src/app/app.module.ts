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
import { HashLocationStrategy, LocationStrategy, APP_BASE_HREF, PathLocationStrategy } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { RollbarErrorHandler, rollbarFactory } from './rollbar/rollbar';
import * as Rollbar from 'rollbar';
import { AlbumComponent } from './music/album/album.component';
import { ArtistComponent } from './music/artist/artist.component';
import { SearchComponent } from './music/search/search.component';
import { TrackComponent } from './music/track/track.component';
import { SPOTIFY_PROVIDERS } from './music/service/spotify.service';
import { LoginComponent } from './auth/login/login.component';
import { ProtectedComponent } from './auth/protected/protected.component';

import { AUTH_PROVIDERS } from './auth/service/auth.service';
import { LoggedInGuard } from './auth/logged-in.guard';
import { SquareComponent } from './animation/square/square.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatPageComponent } from './chat/chat-page/chat-page.component';
import { UsersService } from './chat/user/users.service';
import { MessagesService } from './chat/message/messages.service';
import { ThreadsService } from './chat/thread/threads.service';
import { ChatNavBarComponent } from './chat/chat-nav-bar/chat-nav-bar.component';
import { ChatThreadComponent } from './chat/chat-thread/chat-thread.component';
import { ChatMessageComponent } from './chat/chat-message/chat-message.component';
import { ChatThreadsComponent } from './chat/chat-threads/chat-threads.component';
import { ChatWindowComponent } from './chat/chat-window/chat-window.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {path: 'home', redirectTo: '/', pathMatch: 'full'},
  {path: 'youtube', component: YouTubeSearchComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'about/:id', component: AboutComponent},
  // {path: '', redirectTo: 'search', pathMatch: 'full'},
  {path: 'search', component: SearchComponent},
  {path: 'artists/:id', component: ArtistComponent},
  {path: 'tracks/:id', component: TrackComponent},
  {path: 'albums/:id', component: AlbumComponent},
  // authentication demo
  { path: 'login', component: LoginComponent },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [ LoggedInGuard ]
  },
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
    ContactComponent,
    AlbumComponent,
    ArtistComponent,
    SearchComponent,
    TrackComponent,
    LoginComponent,
    ProtectedComponent,
    SquareComponent,
    ChatPageComponent,
    ChatNavBarComponent,
    ChatThreadComponent,
    ChatMessageComponent,
    ChatThreadsComponent,
    ChatWindowComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HeaderModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [
    HeaderService,
    headerInjectables,
    youTubeSearchInjectables,
    {provide: LocationStrategy, useClass: PathLocationStrategy},
    {provide: ErrorHandler, useClass: RollbarErrorHandler},
    {provide: Rollbar, useFactory: rollbarFactory},
    SPOTIFY_PROVIDERS,
    {provide: APP_BASE_HREF, useValue: '/'},
    AUTH_PROVIDERS,
    LoggedInGuard,
    MessagesService, ThreadsService, UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
