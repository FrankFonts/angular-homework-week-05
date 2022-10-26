import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../shared/infection-data';

@Component({
  selector: 'app-infection-data',
  templateUrl: './infection-data.component.html',
  styleUrls: ['./infection-data.component.css'],
})
export class InfectionDataComponent implements OnInit {
  @Input() dailyData: Data;
  @Input() iWantTheTruth: boolean = true;

  percentage = 0;
  newInfectionNumber: number = 0;
  style: string = 'none';

  constructor() {}

  ngOnInit() {
    this.percentage = Math.random() * 5;

    this.newInfectionNumber = Math.floor(
      (this.dailyData.numberOfDailyTests * 2 * this.percentage) / 100
    );

    if (!this.iWantTheTruth && this.percentage >= 2.5) {
      this.style = 'red';
    } else if (!this.iWantTheTruth && this.percentage < 2.5) {
      this.style = 'green';
    } else {
      this.style = 'blue';
    }
  }
}
