import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Userserviceobj } from './models/Userserviceobj';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  // userObj:any = json({});
  userObj: Userserviceobj = {status: 2, user: '', msg:  '' };

  constructor(public http: HttpClient) { }

  register(userData) {

      //  this.http.post('http://localhost:8080/user', userData).subscribe((data:any)=>{
      this.http.post('/user', userData).subscribe((data: any) => {
          // console.log(data);
          if (data.name) {
            localStorage.setItem('loggedInUserId', data._id);

            this.userObj.status = 1;
            this.userObj.user = data;
            this.userObj.msg = 'success';
            // console.log(this.userObj);
            return this.userObj;
          } else {
            // console.log(data.error);
            if (data.error.code === 11000) {
              // this.errors = "Email already registered."
              // userObj = json({status:0, user:'', msg:"Email already registered."});
              this.userObj.status = 0;
              this.userObj.user = '';
              this.userObj.msg = 'Email already registered.';
              // console.log(this.userObj);
              // console.log(typeof(this.userObj));
              return this.userObj;
            }
            if (data.error.errors) {
              // userObj = json({status:2, user:'', msg:data.error.message});
              this.userObj.status = 2;
              this.userObj.user = '';
              this.userObj.msg = data.error.message;
              // console.log(this.userObj);
              return this.userObj;
            }
          }
          return this.userObj;
      });
  }
}
