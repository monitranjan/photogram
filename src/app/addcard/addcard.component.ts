import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';

@Component({
  selector: 'app-addcard',
  templateUrl: './addcard.component.html',
  styleUrls: ['./addcard.component.css']
})

export class AddcardComponent implements OnInit {

  addcard: any = {};

  constructor(public http: HttpClient, private router: Router) { }

  ngOnInit() {

    if (localStorage.getItem('loggedInUserId') === null) {
      this.router.navigate(['login']);
    }
  }

  add(addcard) {

    addcard.userId = localStorage.getItem('loggedInUserId');
    this.addcard.errors = '';
    addcard.errors = '';

 // this.http.post('http://localhost:8081/card', {addcard}).subscribe((data: any) => {
    this.http.post('/card', {addcard}).subscribe((data: any) => {
        console.log(data);
        if (data.status) {
          console.log(data.card);
          this.router.navigate(['gallery']);
        } else {
          // if(data.error.code == 11000){
            this.addcard.errors = data.error;
          // }
        }
    });
  }
}
