import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

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

      bookingDate: new FormControl('', [Validators.required]),

      numberOfGuests: new FormControl('', [Validators.required]),

      bookingPrice: new FormControl(''),

      bookingStatus: new FormControl(''),

      checkinTime: new FormControl('', [Validators.required]),

      checkoutTime: new FormControl('', [Validators.required]),

      guestEmail: new FormControl('', [Validators.required]),

      guestName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),

      guestAdress: new FormControl('', [Validators.required]),

      guestPhone: new FormControl('', [
        Validators.required,
        Validators.min(10),
      ]),
    });
  }
}
