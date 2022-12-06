import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocoalStorageToken } from './services/localstorage.token';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'hotel';
  role: string = 'admin';

  constructor(
    @Inject(LocoalStorageToken) private storageToken: any,
    private route: Router
  ) {}

  ngOnInit() {
    this.route.events.subscribe((event) => {
      console.log(event);
    });
    this.storageToken.localStorage = 'My app Token';
  }
}
