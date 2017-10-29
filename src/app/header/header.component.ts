import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { IHeaderService } from './header.interface';
import { HeaderService } from './header.service';
import { Header } from './header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  service: IHeaderService;
  loading: boolean;
  loadedCharacter: string;

  constructor(service: HeaderService, private http: Http) {
    this.service = service;
   }

  ngOnInit() {
    this.loading = true;
    this.service.getData().subscribe(
      (results: Header) => {
        this.loadedCharacter = results.title;
        this.loading = false;
      }
    );

  }

}
