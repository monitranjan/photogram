import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  header: any = {};
  constructor(public http: HttpClient) { }

  ngOnInit() {
    // console.log(localStorage.getItem('loggedInUserId'));
    if (localStorage.getItem('loggedInUserId') === null) {
      // this.router.navigate(['login']);
    } else {
      //  this.http.get('http://localhost:8080/user/'+localStorage.getItem('loggedInUserId')).subscribe((data:any)=>{
      this.http.get('/user/' + localStorage.getItem('loggedInUserId')).subscribe((data: any) => {
          // console.log(data);
          data.pass = '****';
          this.header = data;
          console.log(this.header);
      });
    }

  }

}
