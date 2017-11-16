import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
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
