import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.bookingForm = this.formBuilder.group({
      bookingId: new FormControl(''),
      roomId: new FormControl(''),
      bookingDate: new FormControl(''),
      numberOfGuests: new FormControl(''),
      bookingPrice: new FormControl(''),
      bookingStatus: new FormControl(''),
      checkinTime: new FormControl(''),
      checkoutTime: new FormControl(''),
      guestEmail: new FormControl(''),
      guestName: new FormControl(''),
      guestAdress: new FormControl(''),
      guestPhone: new FormControl(''),
    });
  }
}
