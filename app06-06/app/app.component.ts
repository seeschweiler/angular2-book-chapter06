import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">SlicePipe with Lists</h3>
      </div>
      <div class="panel-body">
        <li *ngFor="var i of collection | slice:1:4">{{i}}</li>
      </div>
    </div>
  `
})
export class AppComponent {
  collection: string[] = ['One', 'Two', 'Three', 'Four', 'Five'];
}