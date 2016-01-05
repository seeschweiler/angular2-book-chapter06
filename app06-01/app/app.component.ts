import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Dates with Pipes</h3>
      </div>
      <div class="panel-body">
        <p>{{date | date:'mediumDate' | uppercase}}</p>
        <hr/>
        <p>{{date | date:'yMMMMd' | uppercase }}</p>
        <hr/>
        <p>{{date | date:'shortTime' | uppercase}}</p>
      </div>
    </div>
  `
})
export class AppComponent {
  date: Date;

  constructor() {
    this.date = new Date();
  }
}
