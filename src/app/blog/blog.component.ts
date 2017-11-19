import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup
} from '@angular/forms';
import { Http } from '@angular/http';
import { Blog } from './blog.model';
import { IBlogService } from './blog.interface';

import { BlogService } from './blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styles: []
})
export class BlogComponent implements OnInit {
  myForm: FormGroup;
  service: IBlogService;
  messages: Array<Blog>;

  constructor(fb: FormBuilder, private http: Http, service: BlogService) {
    this.service = service;
    this.myForm = fb.group({
      'message': ['message from component...']
    });
  }

  ngOnInit() {
    this.service.getData().subscribe(
      (results: Array<Blog>) => {
        console.log('messages', results);
        this.messages = results;
      }
    );
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
    this.http.post(
      'https://rails-playground-api.herokuapp.com/api/blog',
      value)
      .subscribe(() => {
        console.log('posting...');
      });
  }

}
