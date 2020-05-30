import { Component, OnInit, EventEmitter, Output } from "@angular/core";

import { Todo } from "../../../models/Todo";

@Component({
    selector: "app-todo-add",
    templateUrl: "./todo-add.component.html",
    styleUrls: ["./todo-add.component.scss"],
})
export class TodoAddComponent implements OnInit {
    @Output() addTodo: EventEmitter<Todo> = new EventEmitter();

    title: string;

    ngOnInit(): void {}

    onSubmit() {
        const todo = { id: Math.random(), title: this.title, completed: false };
        this.title = "";

        this.addTodo.emit(todo);
    }
}
