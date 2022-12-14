import { Component, HostListener } from '@angular/core';
import { Data, infectionData } from './shared/infection-data';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  infectionData: Array<Data> | undefined = infectionData;

  doIWantTheTruth: boolean = false;

  @HostListener('window:keydown.alt.t', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    this.doIWantTheTruth = !this.doIWantTheTruth;
  }
}
