import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-room-booking',
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.css'],
})
export class RoomBookingComponent implements OnInit {
  roomId: number = 0;
  // roomId$ = this.router.params.pipe(map((params) => params['roomId']));
  roomId$ = this.router.paramMap.pipe(map((params) => params.get('roomId')));

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    // this.roomId = this.router.snapshot.params['roomId'];
    // this.router.params.subscribe((params) => {
    //   this.roomId = params['roomId'];
    //   console.log(this.roomId);
    // });
  }
}
