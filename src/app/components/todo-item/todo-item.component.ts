import { TodoService } from './../../services/todo.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../models/todo';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo = new EventEmitter<Todo>();
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  setClasses(): any {
    const classes = {
      todo: true,
      'is-complete': this.todo.completed
    };
    return classes;
  }

  onToggle(todo: Todo): void {
    console.log('toggle');
    // Toggle in UI
    todo.completed = !todo.completed;
    // Toggle on Server
    this.todoService.toggleCompleted(todo).subscribe( todoItem => console.log(todoItem));
  }

  onDelete(todo: Todo): void {
    console.log('delete');
    // Send to parent component this item to delete
    this.deleteTodo.emit(todo);
  }

}
