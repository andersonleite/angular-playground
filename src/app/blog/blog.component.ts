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
  message: string;

  constructor(fb: FormBuilder, private http: Http, service: BlogService) {
    this.service = service;
    this.myForm = fb.group({
      'message': ['message from component...']
    });
  }

  ngOnInit() {
    this.service.getData().subscribe(
      (results: Blog) => {
        this.message = results.message;
      }
    );
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
    this.http.post(
      'http://localhost:3000/api/blog',
      value)
      .subscribe(() => {
        console.log('posting...');
      });
  }

}
