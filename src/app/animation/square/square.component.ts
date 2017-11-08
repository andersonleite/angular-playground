import { Component, OnInit } from '@angular/core';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-square',
  animations: [
    trigger('signal', [
      state('void', style({
        'transform': 'translateY(-100%)'
      })),
      state('go', style({
        'background-color': '#be3129',
        'height': '100px'
      })),
      state('stop', style({
        'background-color': 'white',
        'height': '50px'
      })),
      // transition('void => *', animate(0)),
      // transition('* => *', animate(500)),

      transition('void <=> *', animate(1000, keyframes([
        style({'transform': 'scale(0)'}),
        style({'transform': 'scale(.9)'}),
        style({'transform': 'scale(.1)'}),
        style({'transform': 'scale(.9)'}),
        style({'transform': 'scale(.5)'}),
        style({'transform': 'scale(1)'}),
      ]))),
      transition('go <=> stop', animate('2s 1s cubic-bezier(0.075, 0.82, 0.165, 1)'))
    ])

  ],
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {

  signal;
  isHere = false;

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

  onToggleClick() {
    this.isHere = !this.isHere;
  }
}
