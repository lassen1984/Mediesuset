import { Component, OnInit } from '@angular/core';
import { HttpfetchService } from './../../services/httpfetch.service';

@Component({
  selector: 'app-forside',
  templateUrl: './forside.component.html',
  styleUrls: ['./forside.component.scss']
})


export class ForsideComponent implements OnInit {
  news;
  constructor(public http: HttpfetchService) {


  }

  ngOnInit(): void {
    this.http.getNews().subscribe((res: any) => {
      console.log(res.items);
      this.news = res.items;
    });
  }
}