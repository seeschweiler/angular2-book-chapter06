import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {TemperatureConverterPipe} from './temperature-converter.pipe';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, TemperatureConverterPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
