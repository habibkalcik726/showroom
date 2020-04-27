import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AccountService } from '../services/account.service';
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private accountService: AccountService,
    private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let logged = this.accountService.IsLoggedin();
   console.log(localStorage.getItem("isLogged"));
    if (localStorage.getItem("isLogged")) {
      return true;
    }
    else {
      this.router.navigate(["login"])
      return false;
    }
  }

}