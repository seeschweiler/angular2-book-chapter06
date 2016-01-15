import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Promises</h3>
      </div>
      <div class="panel-body">
        <p>{{promise | async}}</p>
      </div>
    </div>
  `
})
export class AppComponent {
  promise: Promise<string>;
  constructor() {
    this.promise = new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve("Promise resolved after 2 sec!");
      }, 2000)
    });
  }
}