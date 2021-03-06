import { cloneArray } from '../state/utils';
import { TodoItem } from '../common';
import { Component, Inject, OnInit, OnDestroy, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { TodoService } from './services';
import { MdSnackBar } from '@angular/material';

@Component({
    selector: 'todo',
    templateUrl: './todo.component.html',
})
export class TodoComponent implements OnInit, OnDestroy {
    private todos: TodoItem[];
    private orig: TodoItem[];

    //@ViewChild('description') private descriptionInput: ElementRef;

    constructor(private todoService: TodoService, private snackBar: MdSnackBar) {

    }

    public ngOnInit() {
            this.todoService.load()
                .subscribe((result) => {
                    this.orig = result;
                    this.todos = cloneArray(result);
            });
    }

    public ngOnDestroy() {

    }

    public onAdd(newItem: TodoItem): void {
      newItem.lastModified = new Date();
      this.todos.push(newItem);
      this.snackBar.open('add item', null, {duration: 1500});


    }
  /*  public onAdd(newItemDescription: string) {
        const newItem = { description: newItemDescription, checked: false, lastModified: new Date(), id: 0 };
        this.descriptionInput.nativeElement.value = '';
        this.snackBar.open(`Item with description "${newItemDescription} added`, null, { duration: 1500 });
        this.todos.push(newItem);
        this.snackBar.open('add item', null, { duration: 1500 });

    }*/

    public onReset(): void {
        this.todos = cloneArray(this.orig);
        this.snackBar.open('reset todos', null, { duration: 1500 });
    }

    /*
    public get itemsOpen(): TodoItem[] {
        return this.filterCheckedBy(false);
    }

    public get itemsDone(): TodoItem[] {
        return this.filterCheckedBy(true);
    }

    public onChecked(checked: boolean, item: TodoItem) {
        item.checked = checked;
        item.lastModified = new Date();
        this.snackBar.open('checked / unchecked item', null, { duration: 1500 });
    }

    private filterCheckedBy(checked: boolean): TodoItem[] {
        if (this.todos) {
            return this.todos.filter((item) => item.checked === checked);
        }

        return undefined;
    }*/
}
