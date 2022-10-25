import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../infection-data';


@Component({
  selector: 'app-infection-data',
  templateUrl: './infection-data.component.html',
  styleUrls: ['./infection-data.component.css'],
})
export class InfectionDataComponent implements OnInit {
  @Input() dailyData: Data;

  
  constructor() {}

  ngOnInit() {}
}
