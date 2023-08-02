import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void { }

  authenticate(): void {
    const user = { email: this.email, password: this.password };
    this.http.post<any>('/api/login/authenticate', user).subscribe(
      response => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/profile']);
      },
      error => {
        this.error = error.error;
      }
    );
  }
}
