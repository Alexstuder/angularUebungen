import { Injectable, Inject } from '@angular/core';
import { TodoItem } from '../../common';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Action, dispatcherToken } from '../../state';

@Injectable()
export class TodoService {
  constructor(private http: Http){
  
  }
  public load(): Observable<TodoItem[]> {
    return this.http.get('app/+todo-single-component/mock-data/todos.json')
       .map((result) => result.json());
  } 
}
