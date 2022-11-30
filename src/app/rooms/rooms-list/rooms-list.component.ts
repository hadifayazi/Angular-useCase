import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { RoomList } from '../roomInterface';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
})
export class RoomsListComponent implements OnInit, OnChanges {
  @Input() rooms: RoomList[] = [];

  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
  addRoom() {
    const newRoom: RoomList = {
      roomNumber: 22,
      roomType: 'Twin',
      ameneties: 'Air conditioner, free wifi',
      price: 115,
      img: 'https://venezia.satoripop.com/uploads/11/images/960_TWIN%20ROOMcopie.jpg',
      checkinTime: new Date('31-Nov-2022'),
      checkoutTime: new Date('26-Nov-2022'),
    };
    this.rooms = [...this.rooms, newRoom];
  }
}
