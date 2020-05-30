import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Todo } from "src/app/models/Todo";

@Component({
    selector: "app-todo-item",
    templateUrl: "./todo-item.component.html",
    styleUrls: ["./todo-item.component.scss"],
})
export class TodoItemComponent implements OnInit {
    @Input() todo: Todo;
    @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}

    setClasses() {
        let classes = {
            "is-completed": this.todo.completed,
        };
        return classes;
    }

    onToggle(todo:Todo) {
        todo.completed = !todo.completed
    }

    onDelete(todo:Todo) {
        this.deleteTodo.emit(todo)
    }
}
