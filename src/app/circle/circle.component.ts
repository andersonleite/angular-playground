import { Component, OnInit } from '@angular/core';
import {log} from "util";

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {

  constructor() { }

  color:string = '#white';

  changeStyle($event){
    this.color = $event.type == 'mouseover' ? '#be3129' : 'white';
  }

  ngOnInit() {
  }

}
