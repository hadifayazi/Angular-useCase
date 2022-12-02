import { Component, Inject, OnInit } from '@angular/core';
import { LocoalStorageToken } from './services/localstorage.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'hotel';
  role: string = 'admin';

  constructor(@Inject(LocoalStorageToken) private storageToken: any) {}

  ngOnInit() {
    this.storageToken.localStorage = 'My app Token';
  }
}
