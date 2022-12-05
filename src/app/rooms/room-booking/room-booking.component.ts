import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-booking',
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.css'],
})
export class RoomBookingComponent implements OnInit {
  roomId: number = 0;

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      // this.roomId = params['roomId'];
      // console.log(this.roomId);
      this.roomId = this.router.snapshot.params['roomId'];
    });
  }
}
