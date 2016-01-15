import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({name: 'temperatureConverter'})
export class TemperatureConverterPipe implements PipeTransform {
    transform(value:number, args:string[]) : any {
      
      if(value && !isNaN(value)) {
        let result:string = value.toString();
        
        // args0 === 'F2C' -> Convert degree Fahrenheit to degree Celsius
        // args0 === 'C2F' -> Convert degree Celsius to degree Fahrenheit
        switch (args[0]) {
          case 'F2C':
            result = ((value-32) * 5/9).toFixed(2);
            if (args[1])
              result = result + ' °C';
            break;
          case 'C2F':
            result = (value * 9/5 + 32).toFixed(2);
            if (args[1])
              result = result + ' °F';
            break;                       
        }
        return result;      
      } 

      return;
    }
};