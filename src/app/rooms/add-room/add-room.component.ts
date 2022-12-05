import { Component, OnInit } from '@angular/core';
import { RoomsService } from 'src/app/services/rooms.service';
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

  successMessage: string = '';
  constructor(private roomService: RoomsService) {}

  ngOnInit(): void {}
  addRoom(): void {
    this.roomService.addRoom(this.room).subscribe((room) => {
      this.successMessage = 'Room was added successfully!';
    });
  }
}
