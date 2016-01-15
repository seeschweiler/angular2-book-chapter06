import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">JSON Output</h3>
      </div>
      <div class="panel-body">
        <p>Without JsonPipe:</p>
        <pre>{{jsonObject}}</pre>
        <hr />
        <p>With JsonPipe:</p>
        <pre>{{jsonObject | json}}</pre>
      </div>
    </div>
  `
})
export class AppComponent {
  jsonObject: Object;
  constructor() {
    this.jsonObject = {
      name: 'Sebastian Eschweiler',
      title: 'Angular 2',
      subtitle: 'A Practical Introduction To The New Web Development Platform',
      toc: {
        chapter1: 'Introduction',
        chapter2: 'Your First Angular 2 Application',
        chapter3: 'Components',
        chapter4: 'Events',
        chapter5: 'Forms',
        chapter6: 'Pipes'
      }
    };
  }
}