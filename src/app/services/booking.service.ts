import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookingService implements OnInit {
  constructor(private httpclient: HttpClient) {}
  ngOnInit(): void {}

  addBoooking(booking: any) {
    return this.httpclient.post(
      'https://jsonplaceholder.typicode.com/posts',
      booking
    );
  }
}
