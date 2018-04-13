import { Component, OnInit } from '@angular/core';
import { AuthRequest, AuthStore } from '../../auth-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  model = {
    login: "", password: "", remember: true
  };
  constructor(private auth: AuthStore, private router: Router) { }

  login() {
    const authRequest: AuthRequest = {
      userName: this.model.login,
      password: this.model.password,
      rememberMe: this.model.remember
    };
    this.auth.login(authRequest).subscribe(state => this.router.navigate(['/home']));
  }
}
