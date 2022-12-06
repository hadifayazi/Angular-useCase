import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRoomComponent } from './add-room/add-room.component';
import { RoomBookingComponent } from './room-booking/room-booking.component';
import { RoomsComponent } from './rooms.component';

const routes: Routes = [
  {
    path: 'rooms',
    component: RoomsComponent,
    children: [
      {
        path: ':roomId',
        component: RoomBookingComponent,
      },
    ],
  },
  {
    path: 'rooms/add',
    component: AddRoomComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsRoutingModule {}
