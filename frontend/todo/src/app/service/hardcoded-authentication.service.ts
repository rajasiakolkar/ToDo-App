import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password){
    if(username === 'rajasi' && password === 'test'){
      sessionStorage.setItem('authenticateUser', username);
      return true;
    } else {
      return false;
    }
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
  }
}
