"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var open_todos_pipe_1 = require('./open-todos.pipe');
var todos_1 = require('./todos');
var TodosComponent = (function () {
    function TodosComponent() {
        this.todos = [];
        this.mutate = true;
        this.title = 'Todos (pure)';
        this.reset();
    }
    TodosComponent.prototype.addTodo = function (title) {
        title = title.trim();
        if (!title) {
            return;
        }
        var todo = { title: title, status: 'open' };
        if (this.mutate) {
            this.todos.push(todo);
        }
        else {
            this.todos = this.todos.concat(todo);
        }
    };
    TodosComponent.prototype.reset = function () { this.todos = todos_1.TODOS.slice(); };
    TodosComponent = __decorate([
        core_1.Component({
            selector: 'todos',
            templateUrl: 'app/todos.component.html',
            pipes: [open_todos_pipe_1.OpenTodosPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], TodosComponent);
    return TodosComponent;
}());
exports.TodosComponent = TodosComponent;
var TodosImpureComponent = (function (_super) {
    __extends(TodosImpureComponent, _super);
    function TodosImpureComponent() {
        _super.apply(this, arguments);
        this.title = 'Todos (impure)';
    }
    TodosImpureComponent = __decorate([
        core_1.Component({
            selector: 'todos-impure',
            templateUrl: 'app/todos.component.html',
            pipes: [open_todos_pipe_1.OpenTodosImpurePipe]
        }), 
        __metadata('design:paramtypes', [])
    ], TodosImpureComponent);
    return TodosImpureComponent;
}(TodosComponent));
exports.TodosImpureComponent = TodosImpureComponent;
//# sourceMappingURL=todos.component.js.map