import { Component, Inject, OnInit } from '@angular/core';
import {
  GuardsCheckEnd,
  NavigationEnd,
  NavigationStart,
  Router,
} from '@angular/router';
import { LocoalStorageToken } from './services/localstorage.token';
import { RoomsService } from './services/rooms.service';
import { filter, pipe } from 'rxjs';

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
    // this.route.events.subscribe((event) => {
    //   console.log(event);
    // });

    this.route.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event) => {
        console.log(
          '*********************Navigation started*******************'
        );
      });
    this.route.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        console.log('***********Navoigatiopon ended**************');
      });

    this.route.events
      .pipe(filter((event) => event instanceof GuardsCheckEnd))
      .subscribe((event) => {
        console.log(event);
      });
    this.storageToken.localStorage = 'My app Token';
  }
}
