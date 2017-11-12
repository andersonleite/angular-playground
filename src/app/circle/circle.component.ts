import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { log } from "util";

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent implements OnInit {

  // opt + ent tp import
  @Output() bgControl: EventEmitter<boolean> = new EventEmitter<boolean>();
  original: boolean;

  constructor(private el: ElementRef) {
  }

  color: string = '#000';

  changeStyle($event) {
    this.color = $event.type === 'mouseover' ? 'white' : '#000';
  }


  ngOnInit(): void {
    // convert the `keyup` event into an observable stream
    Observable.fromEvent(this.el.nativeElement, 'click')
    // act on the return of the click
      .subscribe(
        () => { // on sucesss
          this.original = !this.original;
          this.bgControl.emit(this.original);
        },
        (err: any) => { // on error
          console.log(err);
          this.bgControl.emit(true);
        },
        () => { // on completion
          this.bgControl.emit(true);
        }
      );
  }

}
