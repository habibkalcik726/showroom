import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../services/notification.service';
import { AccountService } from '../services/account.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private notificationService: NotificationService,
    private accountService: AccountService) {


  }
  userLoginForm: FormGroup;
  userModel: User = new User();

  UserLoginCheck() {
    this.userLoginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]


    });

  }

  ngOnInit(): void {
    this.UserLoginCheck();
  }
  Login() {

    
    if (this.userLoginForm.valid) {
      this.userModel = Object.assign({}, this.userLoginForm.value);

      this.accountService.Login(this.userModel);
      this.notificationService.Success(this.accountService.logedIn+ "");

      if(this.accountService.logedIn)
      this.notificationService.Success("Welcome "+ this.userModel.username);

    }
    else{
      console.log(this.userLoginForm);
      this.notificationService.Success("Error");
    }
  }


}
