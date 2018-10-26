import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any = {};
  constructor(public http: HttpClient, private router: Router) { }

  ngOnInit() {

    if (localStorage.getItem('loggedInUserId') === null) {
      this.router.navigate(['login']);
    }

    //  this.http.get('http://localhost:8080/user/' + localStorage.getItem('loggedInUserId')).subscribe((data: any) => {
    this.http.get('/user/' + localStorage.getItem('loggedInUserId')).subscribe((data: any) => {
        // console.log(data);
        data.pass = '****';
        this.profile = data;
    });

  }


}
