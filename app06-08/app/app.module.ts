import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'

import { AppComponent }   from './app.component';
import { TodosComponent} from './todos.component';
import { OpenTodosPipe, OpenTodosImpurePipe } from './open-todos.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TodosComponent, OpenTodosPipe, OpenTodosImpurePipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
