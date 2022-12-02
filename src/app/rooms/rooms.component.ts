import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  QueryList,
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
  constructor(private roomsService: RoomsService) {}

  ngOnInit(): void {
    this.roomList = this.roomsService.getrooms();
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
