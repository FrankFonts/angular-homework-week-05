import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Data } from '../shared/infection-data';

@Component({
  selector: 'app-infection-data',
  templateUrl: './infection-data.component.html',
  styleUrls: ['./infection-data.component.css'],
})
export class InfectionDataComponent implements OnInit {
  @Input() dailyData: Data;
  @Input() set doIWantTheTruth(value: boolean) {
    this.iWantTheTruth = value;
    this.style = this.getStyle(value);
  }

  iWantTheTruth: boolean = false;
  percentage = 0;
  newInfectionNumber: number = 0;
  style: string = 'none';

  constructor() {}

  getStyle(value) {
    if (value) {
      return 'blue';
    } else if (!value && this.percentage >= 2.5) {
      return 'red';
    } else {
      return 'green';
    }
  }

  ngOnInit() {
    this.percentage = Math.random() * 5;

    this.newInfectionNumber = Math.floor(
      (this.dailyData.numberOfDailyTests * 2 * this.percentage) / 100
    );

    this.style = this.getStyle(this.iWantTheTruth);
  }
}
