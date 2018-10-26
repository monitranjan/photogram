import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../user.service';
import { Userserviceobj } from '../models/Userserviceobj';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = {name: '', email: '', pass: ''};
  userResponse: Userserviceobj;
  errors: string;

  constructor(public http: HttpClient, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userResponse = this.userService.userObj;
    // userResponse:UserService = this.userService.userObj;
  }

  hasUser() {
    if (this.userResponse.hasOwnProperty('user')) {
      if (this.userResponse.status === 1) {
        // console.log("user exists");
        this.router.navigate(['addcard']);
      } else {
        // console.log("user doesn't exists");
        this.errors = this.userService.userObj.msg;
      }
    }
  }
  register(u) {
    // this.http.post('http://localhost:8081/user', u).subscribe((data: any) => {
    this.http.post('/user', u).subscribe((data: any) => {
       console.log(data);
        if (data.name) {
          localStorage.setItem('loggedInUserId', data._id);
          this.router.navigate(['addcard']);
        } else {
          // console.log(data.error);
          if (data.error.code === 11000) {
            this.errors = 'Email already registered';
          }
          if (data.error.errors) {
            this.errors = data.error.message;        }
        }
        });
      }
      }
