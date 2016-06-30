import { Pipe, PipeTransform } from '@angular/core';

import { Todo } from './todos';

@Pipe({ name: 'openTodos' })
export class OpenTodosPipe implements PipeTransform {
  transform(allTodos: Todo[]) {
    return allTodos.filter(todo => todo.status == 'open');
  }
}

@Pipe({
  name: 'openTodos',
  pure: false
})
export class OpenTodosImpurePipe extends OpenTodosPipe {}
