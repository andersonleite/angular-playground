import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-square',
  animations: [
    trigger('signal', [
      state('go', style({
        'background-color': '#be3129',
        'height': '100px'
      })),
      state('stop', style({
        'background-color': 'white',
        'height': '50px'
      })),
      // transition('void => *', animate(0)),
      transition('* => *', animate(500))
    ])

  ],
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {

  signal;

  constructor() {
  }

  ngOnInit() {
  }

  onGoClick() {
    this.signal = 'go';
  }

  onStopClick() {
    this.signal = 'stop';
  }
}
