import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Ratings</h3>
      </div>
      <div class="panel-body">
        <p>Rating 1: {{rating1 | percent}}</p>
        <p>Rating 2: {{rating2 | percent:'3.1-1'}}</p>
      </div>
    </div>
  `
})
export class AppComponent {
  rating1: number;
  rating2: number;

  constructor() {
    this.rating1 = 0.7459;
    this.rating2 = 0.9645;
  }
}
