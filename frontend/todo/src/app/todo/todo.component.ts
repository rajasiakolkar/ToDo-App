import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ToDo } from '../list-to-do/list-to-do.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: ToDo
  constructor(private todoService: TodoDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new ToDo(this.id, '', new Date(), false);

    if (this.id != -1) {
      this.todoService.retriveTodo('rajasi', this.id).subscribe(
        data => {
          this.todo = data;
        }
      );
    }

  }

  saveTodo() {
    if (this.id == -1) {
      this.todoService.createTodo('rajasi', this.todo).subscribe(
        data => {
          this.router.navigate(['list']);
        }
      );
    } else {
      this.todoService.updateTodo('rajasi', this.id, this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['list']);
        }
      );
    }

  }

}
