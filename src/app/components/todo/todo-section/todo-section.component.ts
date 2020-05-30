import { Component, OnInit } from "@angular/core";
import { TodoService } from "../../../services/todo.service";
import { Todo } from "../../../models/Todo";

@Component({
    selector: "app-todo-section",
    templateUrl: "./todo-section.component.html",
    styleUrls: ["./todo-section.component.scss"],
})
export class TodoSectionComponent implements OnInit {
    todos: Todo[];
    constructor(private todoService: TodoService) {}

    ngOnInit(): void {
        this.todos = this.todoService.getTodos();
    }

    deleteTodo(todo: Todo): void {
        this.todos = this.todos.filter((t) => t.id !== todo.id);
    }

    addTodo(todo: Todo): void {
        this.todos.push(todo);
    }
}
