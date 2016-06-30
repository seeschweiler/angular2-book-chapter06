import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'temperatureConverter'})
export class TemperatureConverterPipe implements PipeTransform {
    transform(value:number, mode:string, outputWithUnit:boolean) : any {

      if(value && !isNaN(value)) {
        let result:string = value.toString();

        // mode === 'F2C' -> Convert degree Fahrenheit to degree Celsius
        // mode === 'C2F' -> Convert degree Celsius to degree Fahrenheit
        switch (mode) {
          case 'F2C':
            result = ((value-32) * 5/9).toFixed(2);
            if (outputWithUnit)
              result = result + ' °C';
            break;
          case 'C2F':
            result = (value * 9/5 + 32).toFixed(2);
            if (outputWithUnit)
              result = result + ' °F';
            break;
        }
        return result;
      }

      return;
    }
};
