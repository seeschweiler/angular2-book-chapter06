"use strict";
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
var todos_1 = require('./todos');
var TodosComponent = (function () {
    function TodosComponent() {
        this.todos = [];
        this.mutate = true;
        this.title = 'Todos (pure and impure pipe demo)';
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
            templateUrl: 'app/todos.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TodosComponent);
    return TodosComponent;
}());
exports.TodosComponent = TodosComponent;
//# sourceMappingURL=todos.component.js.map