import { Component } from '@angular/core';
import { TODOS, Todo } from './todos';

@Component({
  selector: 'todos',
  templateUrl: 'app/todos.component.html'
})
export class TodosComponent {
  todos: Todo[] = [];
  mutate = true;
  title = 'Todos (pure and impure pipe demo)';

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
