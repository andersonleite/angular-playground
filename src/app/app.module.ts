import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

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
import { APP_BASE_HREF, LocationStrategy, PathLocationStrategy } from '@angular/common';
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
import { appStoreProviders } from './counter/app.store';
import { CounterComponent } from './counter/counter/counter.component';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routing';
import { BlogComponent } from './blog/blog.component';
import { BlogService } from './blog/blog.service';
import { blogInjectables } from './blog/blog.injectables';
import { BlankCmp, RootCmp } from './music/test/test.module';

import { MaterializeModule } from 'angular2-materialize';
import { Angular2TokenService } from 'angular2-token';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';

@NgModule({
  declarations: [
    CounterComponent,
    BlankCmp,
    RootCmp,
    AppComponent,
    BlogComponent,
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
    ChatWindowComponent,
    ToolbarComponent,
    AuthDialogComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HeaderModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterializeModule
  ],
  providers: [
    appStoreProviders,
    HeaderService,
    BlogService,
    headerInjectables,
    blogInjectables,
    youTubeSearchInjectables,
    {provide: LocationStrategy, useClass: PathLocationStrategy},
    {provide: ErrorHandler, useClass: RollbarErrorHandler},
    {provide: Rollbar, useFactory: rollbarFactory},
    SPOTIFY_PROVIDERS,
    {provide: APP_BASE_HREF, useValue: '/'},
    AUTH_PROVIDERS,
    LoggedInGuard,
    MessagesService, ThreadsService, UsersService,
    Angular2TokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
