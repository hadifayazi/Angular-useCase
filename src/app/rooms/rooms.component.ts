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
  numberOfRooms: number = 50;
  hideRooms: boolean = false;
  loadesBytes: number = 0;

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
    this.roomsService.getrooms().subscribe((rooms) => {
      this.roomList = rooms;
    });

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

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
  selectedRoom(room: RoomList) {
    this.bookedRooms.push(room);
  }
}
