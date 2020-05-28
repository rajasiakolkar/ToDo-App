import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = ''
  messageFromService : string;
  constructor(private route: ActivatedRoute, private service:WelcomeDataService) { 
    
  }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['username'];
  }

  getWelcomeMessage(){
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    console.log("getWelcomeMessage");
  }

  handleSuccessfulResponse(response){
    console.log(response);
    console.log(response.message);
    this.messageFromService = response.message;
  }

  handleErrorResponse(error){
    console.log(error);
    console.log(error.error);
    console.log(error.error.message);
    this.messageFromService = error.error.message;
  }

  getWelcomeMessageWithPathVariable(){
    console.log(this.service.executeHelloWorldBeanServiceWithPathVariable(this.name));
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    console.log("getWelcomeMessageWithPathVariable");
  }

}
