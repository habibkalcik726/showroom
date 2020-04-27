import { Injectable } from '@angular/core';
import { User } from '../login/user';

@Injectable()
export class AccountService {

  constructor() { }
  logedIn:boolean = false;
  Login(user: User): boolean {

    if (user.username == "habib" && user.password == "123") {
      this.logedIn = true;
      localStorage.setItem("isLogged", user.username);
      // localStorage.removeItem("isLogged");

      return true;

    }
    return false;
  }

  IsLoggedin(): boolean {
console.log(1+" "+this.logedIn);
    return this.logedIn;
  }

  LogOut() {
    localStorage.removeItem("isLogged");
    this.logedIn = false;

  }
}
