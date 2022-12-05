import { HttpEventType } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  QueryList,
  SkipSelf,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { catchError, map, of, Subscription } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from '../services/rooms.service';
import { Room, RoomList } from './roomInterface';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements OnInit {
  hotelName: string = 'Tilsitt';
  hideRooms: boolean = true;

  loadesBytes: number = 0;

  //Creating a Subscription instence manually to manage the subscribtion and avoide forgeting to unsubscribe, then asign our subscribe object to it and then in ngOnDestry Unsubscribe. specially in cases when we just need to rad the data.
  subscription!: Subscription;

  //insteat of subscribtion manually , use asyncPip. creating a stream
  //the error handling part should be wirten in the service an not the component
  rooms$ = this.roomsService.getRooms$.pipe(
    catchError((err) => {
      console.log(err);
      return of([]);
    })
  );

  roomsCount$ = this.roomsService.getRooms$.pipe(map((rooms) => rooms.length));

  bookedRooms: RoomList[] = [];

  rooms: Room = {
    totalRooms: 50,
    availableRooms: 0,
    bookedRooms: 40,
  };

  roomList: RoomList[] = [];

  @ViewChild(HeaderComponent)
  headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent)
  headerChildernComponent!: QueryList<HeaderComponent>;
  constructor(@SkipSelf() private roomsService: RoomsService) {}

  ngOnInit(): void {
    // this.subscription = this.roomsService.getRooms$.subscribe((rooms) => {
    //   this.roomList = rooms;
    // });

    this.roomsService.getPhoto().subscribe((event) => {
      console.log(event);
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('Request has benn made!');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request sucessfully sent!');
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.loadesBytes += event.loaded;
          console.log(this.loadesBytes);
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body);
          console.log(event.status);
        }
      }
    });

    this.toggle();
  }
  ngAfterViewInit() {
    this.headerComponent.title = 'Tilsitt';
    console.log(this.headerChildernComponent);
    // this.headerChildernComponent.last.title = 'Sister hotels';
    // console.log(this.headerChildernComponent.get(0));
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
  selectedRoom(room: RoomList) {
    this.bookedRooms.push(room);
  }
}
