import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';

import { SampleLibModule, SampleButtonComponent } from "@nx-experiments/sample-lib";
@NgModule({
  imports: [
    BrowserModule, NxModule.forRoot(),
    SampleLibModule
  ],
  exports: [
    SampleLibModule,
    SampleButtonComponent
  ],
  declarations: [AppComponent, SampleButtonComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
