import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { BehaviorSubject, Observable, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private https: HttpClient) {}
  userProfile: BehaviorSubject<UserModel> = new BehaviorSubject<UserModel>({
    id: '',
    email: '',
    userName: '',
  });
  login(user: any) {
    return this.https.post(
      'https://localhost:7089/api/Authenticate/sign-in',
      user,
      {
        withCredentials: true,
      }
    );
  }
  profile(email: any): Observable<UserModel> {
    return this.https
      .get<any>(
        `https://localhost:7089/api/Authenticate/user-profile?email=${email}`,
        { withCredentials: true }
      )
      .pipe(
        map((response) => {
          const userModel: UserModel = {
            id: response.result.data.id,
            email: response.result.data.email,
            userName: response.result.data.userName,
          };
          return userModel;
        })
      );
  }

  saveUserToLocalStorage(user: UserModel) {
    this.userProfile.next(user);
    localStorage.setItem('user-profile', JSON.stringify(user));
  }

  loadUserFromLocalStorage(): UserModel {
    if (this.userProfile.value.id == '') {
      let fromLocalStorage = localStorage.getItem('user-profile');
      if (fromLocalStorage) {
        let userInfo = JSON.parse(fromLocalStorage);
        this.userProfile.next(userInfo);
      }
    }
    return this.userProfile.value;
  }
  refreshCookie() {
    return this.https.get('http://localhost:3000/refresh-token', {
      withCredentials: true,
    });
  }
}
