import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { AuthService } from 'src/shared/auth/auth.service';
import { UserModel } from 'src/shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginUser: any = {
    email: '',
    password: '',
  };

  constructor(private auth: AuthService) {}
  ngOnInit(): void {}
  login() {
    let authFlow = this.auth
      .login(this.loginUser)
      .pipe(switchMap(() => this.auth.profile(this.loginUser.email)));
    authFlow.subscribe({
      next: (user: UserModel) => {
        this.auth.saveUserToLocalStorage(user);
        console.log(user);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
