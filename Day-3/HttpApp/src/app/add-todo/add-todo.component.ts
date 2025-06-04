import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  task='';
  //DI
  constructor(private todoService:TodoService){}

  addTask(){
    if(this.task.trim()){
      this.todoService.addTodo(this.task);
      this.task='';
    }
  }

}
