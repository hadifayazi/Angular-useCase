import { Component, OnInit } from '@angular/core';
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

  rooms: Room = {
    totalRooms: 50,
    availableRooms: 0,
    bookedRooms: 40,
  };

  roomList: RoomList[] = [
    {
      roomType: 'Double',
      ameneties: 'Air conditioner, free wifi',
      price: 130,
      img: 'https://venezia.satoripop.com/uploads/11/images/957_SINGLE%20ROOMcopie.jpg',
      checkinTime: new Date('11-Nov-2022'),
      checkoutTime: new Date('16-Nov-2022'),
    },
    {
      roomType: 'Single',
      ameneties: 'Air conditioner, free wifi',
      price: 100,
      img: 'https://venezia.satoripop.com/uploads/11/images/957_SINGLE%20ROOMcopie.jpg',
      checkinTime: new Date('11-Nov-2022'),
      checkoutTime: new Date('13-Nov-2022'),
    },
    {
      roomType: 'Superior',
      ameneties: 'Air conditioner, free wifi',
      price: 150,
      img: 'https://venezia.satoripop.com/uploads/11/images/957_SINGLE%20ROOMcopie.jpg',
      checkinTime: new Date('11-Nov-2022'),
      checkoutTime: new Date('16-Nov-2022'),
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
