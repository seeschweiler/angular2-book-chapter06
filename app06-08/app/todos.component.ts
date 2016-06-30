import { Component } from '@angular/core';

import { OpenTodosPipe,
        OpenTodosImpurePipe } from './open-todos.pipe';
import { TODOS, Todo } from './todos';

@Component({
  selector: 'todos',
  templateUrl: 'app/todos.component.html',
  pipes: [OpenTodosPipe]
})
export class TodosComponent {
  todos: Todo[] = [];
  mutate = true;
  title = 'Todos (pure)';

  constructor() { this.reset(); }

  addTodo(title: string) {
    title = title.trim();
    if (!title) { return; }
    let todo = {title: title, status: 'open'};
    if (this.mutate) {
      this.todos.push(todo);
    } else {
      this.todos = this.todos.concat(todo);
    }
  }

  reset() { this.todos = TODOS.slice(); }
}

@Component({
  selector: 'todos-impure',
  templateUrl: 'app/todos.component.html',
  pipes: [OpenTodosImpurePipe]
})
export class TodosImpureComponent extends TodosComponent {
  title = 'Todos (impure)';
}
