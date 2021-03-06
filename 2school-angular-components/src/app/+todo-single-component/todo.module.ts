import { MdButtonModule, MdInputModule, MdSnackBarModule, MdCardModule, MdCheckboxModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { NgModule } from '@angular/core';
import { TodoService } from './services';
import { TodoAddComponent } from './todo-add.component';
import { TodoListComponent } from './todo-list.component';
import { TodoItemComponent } from './todo-item.component';
import { todoRoutesModule } from './todo.routes';

console.log('`Todo` bundle loaded asynchronously');

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MdButtonModule, MdInputModule, MdSnackBarModule,
        MdCardModule, MdCheckboxModule, todoRoutesModule],
    declarations: [TodoComponent,TodoAddComponent, TodoListComponent,TodoItemComponent],
    providers: [TodoService]
})
export class TodoSingleComponentModule {

}
