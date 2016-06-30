import { Component } from '@angular/core';

import { TodosComponent, TodosImpureComponent } from './todos.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [
    TodosComponent,
    TodosImpureComponent,
  ]
})
export class AppComponent {}
