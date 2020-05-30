import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { TodoSectionComponent } from "./components/todo/todo-section/todo-section.component";
import { TodoItemComponent } from "./components/todo/todo-item/todo-item.component";
import { TodoAddComponent } from "./components/todo/todo-add/todo-add.component";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        TodoSectionComponent,
        TodoItemComponent,
        TodoAddComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
