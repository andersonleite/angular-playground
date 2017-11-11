import { Injectable, OnInit } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/Rx';
import { environment } from '../../../environments/environment';
import { ActivatedRoute, Params } from '@angular/router';

/**
 * SpotifyService works querying the Spotify Web API
 * https://developer.spotify.com/web-api/
 */

@Injectable()
export class SpotifyService {
  static BASE_URL = 'https://api.spotify.com/v1';
  access__token: string;

  constructor(private http: Http, private route: ActivatedRoute) {
    this.route
      .queryParams
      .subscribe(params => {
        if (this.route.fragment['_value']) {
          this.access__token = this.route.fragment['_value'].slice(13);
        }
      });
  }


  query(URL: string, params?: Array<string>): Observable<any[]> {
    let queryURL = `${SpotifyService.BASE_URL}${URL}`;
    if (params) {
      queryURL = `${queryURL}?${params.join('&')}`;
    }
    const apiKey = this.access__token;

    const headers = new Headers({
      'Authorization': `Bearer ${apiKey}`
    });
    const options = new RequestOptions({headers: headers});

    return this.http.request(queryURL, options).map((res: any) => res.json());
  }

  search(query: string, type: string): Observable<any[]> {
    return this.query(`/search`, [
      `q=${query}`,
      `type=${type}`
    ]);
  }

  searchTrack(query: string): Observable<any[]> {
    return this.search(query, 'track');
  }

  getTrack(id: string): Observable<any[]> {
    return this.query(`/tracks/${id}`);
  }

  getArtist(id: string): Observable<any[]> {
    return this.query(`/artists/${id}`);
  }

  getAlbum(id: string): Observable<any[]> {
    return this.query(`/albums/${id}`);
  }

  isLogged() {
    return !this.access__token || 0 === this.access__token.length;
  }
}

export const SPOTIFY_PROVIDERS: Array<any> = [
  {provide: SpotifyService, useClass: SpotifyService}
];
