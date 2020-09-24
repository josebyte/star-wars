import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'Star-Wars';

  constructor(
    public authService: AuthService
  ) {
  }

  ngOnInit(): void {
    localStorage.setItem('currentUser', 'joseba'); // by-pass the authguard for task #5: al entrar por primera vez redirigir a lista naves
  }

  logout(): void {
    this.authService.logout();
  }
}
