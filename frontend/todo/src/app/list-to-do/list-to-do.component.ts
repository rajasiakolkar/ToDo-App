import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';
export class ToDo {
  constructor(
    public id: number,
    public description: string,
    public targetDate: Date,
    public isDone: boolean
  ) {}
}

@Component({
  selector: 'app-list-to-do',
  templateUrl: './list-to-do.component.html',
  styleUrls: ['./list-to-do.component.css']
})


export class ListToDoComponent implements OnInit {

  constructor(private todoService: TodoDataService, private router:Router) { }

  message: String;
  todos: ToDo[]; 
  // = [
  //   new ToDo(1,'A', new Date(), false),
  //   new ToDo(2,'B', new Date(), false),
  //   new ToDo(3,'C', new Date(), false)
    
  // ];

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retriveAllTodos('rajasi').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }

  deleteTodo(id) {
    console.log(`delete todo ${id}`);
    this.todoService.deleteTodo('rajasi',id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete Successful for ${id}`;
        this.refreshTodos();
      }
    );
  }

  updateTodo(id) {
    console.log(`update todo ${id}`);
    this.router.navigate(['list',id]);
    
  }

  addTodo() {
    this.router.navigate(['list', -1]);
  }



}
