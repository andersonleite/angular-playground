import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loadedCharacter: '...';
  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('https://rails-playground-api.herokuapp.com/api/header')
      .map(res => res.json())
      .subscribe(header => {
        this.loadedCharacter = header.title;
      });
  }

}
