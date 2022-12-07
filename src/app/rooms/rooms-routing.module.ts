import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomGuard } from '../guards/room.guard';
import { AddRoomComponent } from './add-room/add-room.component';
import { RoomBookingComponent } from './room-booking/room-booking.component';
import { RoomsComponent } from './rooms.component';

const routes: Routes = [
  {
    path: '',
    component: RoomsComponent,
    canActivateChild: [RoomGuard],
    children: [
      {
        path: 'add',
        component: AddRoomComponent,
      },
      {
        path: ':roomId',
        component: RoomBookingComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsRoutingModule {}
