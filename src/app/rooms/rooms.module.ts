import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomsComponent } from './rooms.component';
import { RoomBookingComponent } from './room-booking/room-booking.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RoomsComponent,
    RoomsListComponent,
    RoomBookingComponent,
    AddRoomComponent,
  ],
  imports: [CommonModule, RoomsRoutingModule, FormsModule],
})
export class RoomsModule {}
