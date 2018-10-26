import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  cards: any = [{}];

  constructor(public http: HttpClient, private router: Router) { }

  ngOnInit() {

    if (localStorage.getItem('loggedInUserId') === null) {
      this.router.navigate(['login']);
    }

  //  this.http.get('http://localhost:8081/cards/' + localStorage.getItem('loggedInUserId')).subscribe((data: any) => {
     this.http.get('/cards/'+localStorage.getItem('loggedInUserId')).subscribe((data:any)=>{
        // console.log(data);
        this.cards = data;

    });

  }

  delete(card) {
    // console.log(card);
    let index = 0;

    //this.http.delete('http://localhost:8081/card/' + card._id).subscribe((data: any) => {
   this.http.delete('/card/'+card._id).subscribe((data:any)=>{
      // console.log("in delete function");
      // console.log(data);
      if (data.status) {
        // console.log("success");
        for (let i = 0; i < this.cards.length; i++) {
          if (card._id === this.cards[i]._id) {
            index = i;
          }
        }
        this.cards.splice(index, 1);
      } else {
        console.log(data.error);
      }
    });
  }

}
