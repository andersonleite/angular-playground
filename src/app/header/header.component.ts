import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { IHeaderService } from './header.interface';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  service: IHeaderService;

  loadedCharacter: '...';
  constructor(service: HeaderService, private http: Http) {
    this.service = service;
   }

  ngOnInit() {
    this.service.getData();
    this.http.get('https://rails-playground-api.herokuapp.com/api/header')
      .map(res => res.json())
      .subscribe(header => {
        this.loadedCharacter = header.title;
      });
  }

}
