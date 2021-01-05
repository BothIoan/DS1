import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  SESSION_ATTRIBUTE_ID = 'authenticatedUserID'
  SESSION_ATTRIBUTE_ROLE = 'authenticatedUserRole'
  id : number; 
  role: String;
  constructor() {}

  registerSuccessfulLogin(id : number, role: string){
    sessionStorage.setItem(this.SESSION_ATTRIBUTE_ID,id.toString())
    sessionStorage.setItem(this.SESSION_ATTRIBUTE_ROLE,role);
    this.id = id;
    this.role = role;
  }

  logout() {
    sessionStorage.removeItem(this.SESSION_ATTRIBUTE_ID);
    this.id = null;
    this.role = null;
  }

  isLogged():boolean{
    let user = sessionStorage.getItem(this.SESSION_ATTRIBUTE_ID)
    if (user === null )return false;
    return true
  }
}
