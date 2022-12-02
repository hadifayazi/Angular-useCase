import { Injectable } from '@angular/core';
import { RoomList } from '../rooms/roomInterface';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomList: RoomList[] = [
    {
      roomNumber: 55,
      roomType: 'Double',
      ameneties: 'Air conditioner, free wifi',
      price: 130,
      img: 'https://venezia.satoripop.com/uploads/11/images/878_double1.JPEG',
      checkinTime: new Date('11-Nov-2022'),
      checkoutTime: new Date('16-Nov-2022'),
    },
    {
      roomNumber: 46,
      roomType: 'Single',
      ameneties: 'Air conditioner, free wifi',
      price: 100,
      img: 'https://venezia.satoripop.com/uploads/11/images/1017_78.jpg',
      checkinTime: new Date('11-Nov-2022'),
      checkoutTime: new Date('13-Nov-2022'),
    },
    {
      roomNumber: 76,
      roomType: 'Superior',
      ameneties: 'Air conditioner, free wifi',
      price: 150,
      img: 'https://venezia.satoripop.com/uploads/11/images/1024_Chambre%20sup%C3%A9rieure%20terrasse.jpg',
      checkinTime: new Date('11-Nov-2022'),
      checkoutTime: new Date('16-Nov-2022'),
    },
  ];

  constructor() {}

  getrooms() {
    return this.roomList;
  }
}
