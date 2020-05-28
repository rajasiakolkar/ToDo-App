package com.rajasi.rest.webservices.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWroldController {
	
	
	
	@GetMapping(path = "/hello-world")
	public String helloWorld() {
		//throw new RuntimeException("An Error has occurred");
		return "Hello World";
	}
	
	@GetMapping(path = "/hello-world-bean")
	public HelloWorldBean helloWorldBean() {
		//throw new RuntimeException("An Error has occurred");
		return new HelloWorldBean("Hi Beaaanuuuuuuuuuu");
	}
	
	@GetMapping(path = "/hello-world-bean/{name}")
	public HelloWorldBean helloWorldBeanPathVariable(@PathVariable String name) {
		//throw new RuntimeException("An Error has occurred");
		return new HelloWorldBean(String.format("Hi there, %s", name));
	}
	
	
}
