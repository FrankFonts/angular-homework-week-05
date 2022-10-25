import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InfectionDataComponent } from './infection-data/infection-data.component';
import { infectionDataTransformPipe } from './shared/infection-data.pipe';
import { HighlightDataDirective } from './shared/highlight-data.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    InfectionDataComponent,
    infectionDataTransformPipe,
    HighlightDataDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
