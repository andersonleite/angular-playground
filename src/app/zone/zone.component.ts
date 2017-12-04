import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss']
})
export class ZoneComponent {

  progress: number = 0;
  label: string;

  constructor(private _ngZone: NgZone) {
  }

  // Loop inside the Angular zone. Therefore, the UI does refresh after each setTimeout cycle
  withinAngularZoneProcess() {
    this.label = 'inside';
    this.progress = 0;
    this._increaseProgressBar(() => console.log('Inside Processing Completed!'));
  }

  // Loop outside of the Angular zone. Therefore, the UI does not refresh after each setTimeout cycle
  outsideOfAngularZoneProcess() {
    this.label = 'outside';
    this.progress = 0;
    this._ngZone.runOutsideAngular(() => {
      this._increaseProgressBar(() => {
        this._ngZone.run(() => {
          console.log('Outside Processing Completed!')
        });

      });
    });
  }


  _increaseProgressBar(doneCallback: () => void) {
    this.progress += 2;
    console.log(` Here is the current progress: ${this.progress}%`);

    if (this.progress < 1000) {
      window.setTimeout(() => {
        this._increaseProgressBar(doneCallback);
      }, 10);
    } else {
      doneCallback();
    }
  }

}
