import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface Todo{
  id:number;
  task:string;
} 
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Todo[]=[];
  private todoSubject= new BehaviorSubject<Todo[]>([]);
  public todos$= this.todoSubject.asObservable()

  constructor() { }

  addTodo(task:string){
    const newTodo:Todo={
      id:Date.now(),
      task,
    };

    this.todos.push(newTodo);
    this.todoSubject.next(this.todos);
  }

  removeTodo(id:number){
    this.todos=this.todos.filter((todo)=>todo.id != id);
    this.todoSubject.next(this.todos);
  }
}
