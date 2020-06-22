import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpfetchService {

  constructor(private http: HttpClient) { }


  getNews() {
    return this.http.get('https://api.mediehuset.net/mediesuset/news');
  }
  getEvents() {
    return this.http.get('https://api.mediehuset.net/mediesuset/events');
  }
  getTickets(id) {
    return (id === '') ? this.http.get('https://api.mediehuset.net/mediesuset/tickets')
      : this.http.get(`https://api.mediehuset.net/mediesuset/tickets/${id}`);
  }




}
