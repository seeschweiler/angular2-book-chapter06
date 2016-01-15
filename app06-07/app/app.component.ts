import {Component} from 'angular2/core';
import {TemperatureConverterPipe} from './temperature-converter.pipe';

@Component({
  selector: 'my-app',
  template: `
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">TemperatureConverterPipe</h3>
      </div>
      <div class="panel-body">
        Temperatur: {{30 | temperatureConverter:'C2F':true}}
        <hr />
        Temperatur: {{86 | temperatureConverter:'F2C':true}}
      </div>
    </div>
  `,
  pipes: [TemperatureConverterPipe]
})
export class AppComponent {
}