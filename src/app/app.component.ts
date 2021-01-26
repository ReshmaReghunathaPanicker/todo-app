import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  todoList: Array<string>= [];
  newTodo: string = '';
  error: boolean= false;
  constructor() {
    this.todoList = ['Todo 1', 'Todo 2'];
  }

  deleteTodoItem(todo) {
    this.todoList = this.todoList.filter(e => e !== todo);
  }

  addTodo() {
    this.error = false;
    if(this.newTodo == ''){
      this.error = true;
      return;
    }
    this.todoList.push(this.newTodo);
    this.newTodo = '';
  }
}
