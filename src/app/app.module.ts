import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InfectionDataComponent } from './infection-data/infection-data.component';
import { infectionDataTransformPipe } from './shared/infection-data.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    InfectionDataComponent,
    infectionDataTransformPipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
