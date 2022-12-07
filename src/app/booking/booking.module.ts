import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../shared/input/input.component';

@NgModule({
  declarations: [BookingComponent, InputComponent],
  imports: [CommonModule, BookingRoutingModule, ReactiveFormsModule],
})
export class BookingModule {}
