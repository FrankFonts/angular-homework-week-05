import { Component } from '@angular/core';
import { Data, infectionData } from './shared/infection-data';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  infectionData: Array<Data> | undefined = infectionData;

  iWantTheTruth: boolean = false;

  calculateNewInfectionNumberFrom(data) {
    return Math.floor(data.numberOfDailyTests * 5 * Math.random());
  }
}
