import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';

 @Component({
  selector: 'app-login',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {

  loginData: any = {};

  constructor(public http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  login(userData) {
    // console.log(userData);
    this.loginData.error = '';
    if (userData.email === undefined) {
      this.loginData.error = 'Email is required.';
      return;
    } else if (userData.pass === undefined) {
      this.loginData.error = ' Password is required.';
      return;
    } else {

     //  this.http.post('http://localhost:8081/login', userData).subscribe((data: any) => {
   this.http.post('/login1', userData).subscribe((data: any) => {

          // console.log(data);
          if (data.status) {
            localStorage.setItem('loggedInUserId', data.user._id);

            if (data.cardCount > 0) {
              this.router.navigate(['gallery']);
            } else {
              this.router.navigate(['addcard']);
            }

          } else {
            // console.log(data.error);
            this.loginData.error = data.error;

          }

      });
    }
  }

}
