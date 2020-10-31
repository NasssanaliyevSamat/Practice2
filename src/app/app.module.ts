import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ItalicsDirective} from './italics.directive';
import {ConvertPipe} from './convert.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ItalicsDirective,
    ConvertPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
