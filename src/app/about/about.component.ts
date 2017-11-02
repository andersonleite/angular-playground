import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { extractStyleParams } from "@angular/animations/browser/src/util";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  id: string;

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
  }

}
