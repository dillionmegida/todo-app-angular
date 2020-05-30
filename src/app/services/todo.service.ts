import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class TodoService {
    getTodos() {
        return [{
            id: Math.random(),
            title: "Todo one",
            completed: false,
        },
        {
            id: Math.random(),
            title: "Todo two",
            completed: true,
        },
        {
            id: Math.random(),
            title: "Todo three",
            completed: false,
        },]
    }
}
