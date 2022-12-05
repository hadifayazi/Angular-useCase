import { Component, OnInit } from '@angular/core';
import { RoomList } from '../roomInterface';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css'],
})
export class AddRoomComponent implements OnInit {
  room: RoomList = {
    roomType: '',
    roomNumber: 0,
    ameneties: '',
    price: 0,
    image: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
  };

  constructor() {}

  ngOnInit(): void {}
}
