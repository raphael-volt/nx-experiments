import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { SampleButtonComponent } from './sample-button/sample-button.component';

@NgModule({
  imports: [CommonModule, HttpModule],
  exports: [SampleButtonComponent],
  declarations: [SampleButtonComponent],
  providers: []
})
export class SampleLibModule {}
