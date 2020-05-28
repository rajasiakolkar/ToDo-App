import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDo } from 'src/app/list-to-do/list-to-do.component';
import { JPA_API_URL } from './../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }

  retriveAllTodos(username) {
    return this.http.get<ToDo[]>(`${JPA_API_URL}/users/${username}/todos`);
  }

  retriveTodo(username, id) {
    return this.http.get<ToDo>(`${JPA_API_URL}/users/${username}/todos/${id}`);
    
  }

  deleteTodo(username, id){
    return this.http.delete(`${JPA_API_URL}/users/${username}/todos/${id}`);
  
  }

  updateTodo(username, id, todo){
    return this.http.put(`${JPA_API_URL}/users/${username}/todos/${id}`,todo);
    
  }

  createTodo(username, todo){
    return this.http.post(`${JPA_API_URL}/users/${username}/todos`,todo);
    
  }

}
