import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Exchange Rate</h3>
      </div>
      <div class="panel-body">
        <p>EUR to USD: {{exRate_EUR_USD | number:'2.1-3'}}</p>
      </div>
    </div>
  `
})
export class AppComponent {
  exRate_EUR_USD: number;
  
  constructor() {
    this.exRate_EUR_USD = 1.0748;
  }
}
