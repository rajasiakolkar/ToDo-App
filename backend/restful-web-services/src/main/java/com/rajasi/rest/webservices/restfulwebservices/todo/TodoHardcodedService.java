package com.rajasi.rest.webservices.restfulwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardcodedService {
	
	private static List<Todo> todos = new ArrayList<>();
	private static long idCounter = 0;
	
	static {
		todos.add(new Todo(++idCounter, "rajasi", "A", new Date(), false));
		todos.add(new Todo(++idCounter, "rajasi", "B", new Date(), false));
		todos.add(new Todo(++idCounter, "rajasi", "C", new Date(), false));
	}
	
	public List<Todo> findAll(){
		return todos;
	}
	
	public Todo save(Todo todo) {
		if(todo.getId() == -1 || todo.getId() == 0) {
			todo.setId(++idCounter);
			todos.add(todo);
		} else {
			deleteTodoByID(todo.getId());
			todos.add(todo);
		}
		return todo;
	}
	
	public Todo deleteTodoByID(long id) {
		Todo todo = findByID(id);
		
		if(todo == null ) return null;
		
		if(todos.remove(todo)) {
			return todo;
		} return null;
		
	}

	public Todo findByID(long id) {
		
		for(Todo todo:todos) {
			if(todo.getId() == id) {
				return todo;
			}
			
		}
		 return null;
	}

}
