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
export class BookingComponent {
  bookingId = new FormControl('');

  roomId = new FormControl('');

  bookingDate = new FormControl('', [Validators.required]);

  numberOfGuests = new FormControl('', [Validators.required]);

  bookingPrice = new FormControl('');

  bookingStatus = new FormControl('');

  checkinTime = new FormControl('', [Validators.required]);

  checkoutTime = new FormControl('', [Validators.required]);

  guestEmail = new FormControl('', [Validators.required, Validators.email]);

  guestName = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  guestAdress = new FormControl('', [Validators.required]);

  guestPhone = new FormControl('', [Validators.required, Validators.min(10)]);

  bookingForm = new FormGroup({
    bookingId: this.bookingId,
    roomId: this.roomId,
    bookingDate: this.bookingDate,
    numberOfGuets: this.numberOfGuests,
    checkinTime: this.checkinTime,
    checkoutTime: this.checkoutTime,
    bookingPrice: this.bookingPrice,
    bookingStatus: this.bookingStatus,
    guestName: this.guestName,
    guestEmail: this.guestEmail,
    guestPhone: this.guestPhone,
    guestAdress: this.guestAdress,
  });

  addBooking() {
    console.log(this.bookingForm.getRawValue());
    this.bookingForm.reset();
  }
}
