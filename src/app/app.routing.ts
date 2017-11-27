import { LoggedInGuard } from './auth/logged-in.guard';
import { ProtectedComponent } from './auth/protected/protected.component';
import { LoginComponent } from './auth/login/login.component';
import { AlbumComponent } from './music/album/album.component';
import { TrackComponent } from './music/track/track.component';
import { ArtistComponent } from './music/artist/artist.component';
import { SearchComponent } from './music/search/search.component';
import { AboutComponent } from './about/about.component';
import { CounterComponent } from './counter/counter/counter.component';
import { ContactComponent } from './contact/contact.component';
import { YouTubeSearchComponent } from './search/youtube-search.component';
import { Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {path: 'home', redirectTo: '/', pathMatch: 'full'},
  {path: 'youtube', component: YouTubeSearchComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'counter', component: CounterComponent},
  {path: 'blog', component: BlogComponent},
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
  {
    path: 'profile',
    component: ProfileComponent,
    // canActivate: [AuthGuard]
  }
];
