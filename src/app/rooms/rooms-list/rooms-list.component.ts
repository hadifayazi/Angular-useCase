import { HttpClient } from '@angular/common/http';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnDestroy,
  Optional,
} from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';
import { RoomsService } from 'src/app/services/rooms.service';
import { RoomList } from '../roomInterface';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
})
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy {
  @Input() rooms: RoomList[] | null = [];

  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor(
    @Optional()
    private loggerService: LoggerService,
    private roomsService: RoomsService
  ) {}

  ngOnInit(): void {
    this.loggerService?.log(
      'Logger service from rooms-list component in ngOninit'
    );
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
  addRoom() {
    const newRoom: RoomList = {
      id: 100,
      roomNumber: 22,
      roomType: 'Twin',
      ameneties: 'Air conditioner, free wifi',
      price: 115,
      image:
        'https://venezia.satoripop.com/uploads/11/images/960_TWIN%20ROOMcopie.jpg',
      checkinTime: new Date('31-Nov-2022'),
      checkoutTime: new Date('26-Nov-2022'),
    };

    return this.roomsService.addRoom(newRoom).subscribe((data) => {
      this.rooms = data;
    });
  }
  ngOnDestroy(): void {
    console.log('on destroy is called');
  }
}
