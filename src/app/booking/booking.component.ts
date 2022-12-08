import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatGridTileHeaderCssMatStyler } from '@angular/material';
import { mergeMap, switchMap, exhaustMap } from 'rxjs';
import { BookingService } from '../services/booking.service';
import { CustomFormValidator } from '../validators/custom-form-validators';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  bookingId = new FormControl('');

  roomId = new FormControl('');

  bookingDate = new FormControl('', [Validators.required]);

  numberOfGuests = new FormControl('', {
    updateOn: 'blur',
    validators: [Validators.required],
  });

  bookingPrice = new FormControl('');

  bookingStatus = new FormControl('');

  checkinTime = new FormControl('', [Validators.required]);

  checkoutTime = new FormControl('', [Validators.required]);

  guestEmail = new FormControl('', {
    validators: [Validators.required, Validators.email],
    updateOn: 'blur',
  });

  guestName = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    CustomFormValidator.validateName,
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
  constructor(private bookingSerivce: BookingService) {}

  ngOnInit(): void {
    // this.bookingForm.valueChanges.subscribe((arg) => {
    //   this.bookingSerivce.addBooking(arg).subscribe((arg) => {
    //     console.log(arg);
    //   });
    // });

    this.bookingForm.valueChanges
      .pipe(exhaustMap((data) => this.bookingSerivce.addBooking(data)))
      .subscribe((data) => {
        console.log(data);
      });
  }

  addBooking() {
    this.bookingSerivce.addBooking(this.bookingForm.getRawValue());
  }
}
