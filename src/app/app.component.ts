import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/shared/auth/auth.service';
import { UserModel } from 'src/shared/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  userInfo?: UserModel;
  constructor(private auth: AuthService) {}
  ngOnInit(): void {
    this.auth.userProfile.subscribe((data) => {
      this.userInfo = data;
      console.log(this.userInfo);
    });
  }
  title = 'ang13-jwt-httponlycookie-learning';
}
