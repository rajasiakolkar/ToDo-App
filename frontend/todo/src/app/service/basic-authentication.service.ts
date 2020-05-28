import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  executeJWTAuthenticationService(username, password) {
    
    return this.http.post<any>(`http://localhost:8080/authenticate`,{username, password}).pipe(
      map( 
        data=> {
          sessionStorage.setItem('authenticateUser', username);
          sessionStorage.setItem('token', `Bearer ${data.token }`);
          return data;
        }
      )
    );
    console.log("executeHelloWorldBeanServiceWithPathVariable");
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem('authenticateUser');
  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem('token');
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticateUser');
    if(user === null){
      return false;
    } 
    return true;
  }

  logout(){
    sessionStorage.removeItem('authenticateUser');
    sessionStorage.removeItem('token');
  }

  executeAuthenticationService(username, password) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(username+':'+password);
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    return this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`,{headers}).pipe(
      map( 
        data=> {
          sessionStorage.setItem('authenticateUser', username);
          sessionStorage.setItem('token', basicAuthHeaderString);
          return data;
        }
      )
    );
    console.log("executeHelloWorldBeanServiceWithPathVariable");
  }

  
}

export class AuthenticationBean{
  constructor(public message: string){

  }

}
