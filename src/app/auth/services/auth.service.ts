import { Injectable } from '@angular/core';
import { Observable ,  throwError as _throw ,  of } from 'rxjs';
import { switchMap,  catchError, tap } from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  private currentToken;

  constructor(
    private router: Router
    //private _http: HttpClient,
  ) { }

  login({ username, password }): void{
    const users: any[] = JSON.parse(localStorage.getItem('users')); //todo: user model
    console.log(users);
    users.filter(user =>  user.username === username && user.password === password);
    if (users.length > 0) {
      localStorage.setItem('currentUser', JSON.stringify(username));
      this.router.navigate(['/ships']);
    }
  }

  register({firstName, lastName, username, password}): void {
    const registeredUsers = JSON.parse(localStorage.getItem('users'));
    const users = registeredUsers ? registeredUsers : [];
    users.push({firstName, lastName, username, password});
    localStorage.setItem('users', JSON.stringify(users));
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

}
