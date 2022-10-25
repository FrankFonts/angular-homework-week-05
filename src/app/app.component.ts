import { Component } from '@angular/core';
import { Data, infectionData } from './shared/infection-data';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  infectionData: Array<Data> | undefined = infectionData;
}
