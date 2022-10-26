import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Data } from '../shared/infection-data';

@Component({
  selector: 'app-infection-data',
  templateUrl: './infection-data.component.html',
  styleUrls: ['./infection-data.component.css'],
})
export class InfectionDataComponent implements OnInit, OnChanges {
  @Input() dailyData: Data;
  @Input() iWantTheTruth: boolean = true;

  percentage = 0;
  newInfectionNumber: number = 0;
  style: string = 'none';

  constructor() {}

  getStyle() {
    if (this.iWantTheTruth) {
      return 'blue';
    } else if (!this.iWantTheTruth && this.percentage >= 2.5) {
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
  }

  ngOnChanges() {
    this.style = this.getStyle();
  }
}
