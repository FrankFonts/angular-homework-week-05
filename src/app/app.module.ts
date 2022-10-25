import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InfectionDataComponent } from './infection-data/infection-data.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, InfectionDataComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
