import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../shared/infection-data';

@Component({
  selector: 'app-infection-data',
  templateUrl: './infection-data.component.html',
  styleUrls: ['./infection-data.component.css'],
})
export class InfectionDataComponent implements OnInit {
  @Input() dailyData: Data;
  @Input() newInfectionNumber: number = 0;
  @Input() iWantTheTruth: boolean = true;
  style: string = 'none';

  constructor() {}

  ngOnInit() {
    if (
      !this.iWantTheTruth &&
      this.newInfectionNumber / this.dailyData.numberOfDailyTests >= 2.5
    ) {
      this.style = 'red';
    } else if (
      !this.iWantTheTruth &&
      this.newInfectionNumber / this.dailyData.numberOfDailyTests < 2.5
    ) {
      this.style = 'green';
    } else {
      this.style = 'blue';
    }
  }
}
