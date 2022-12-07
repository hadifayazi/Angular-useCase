export interface Booking {
  bookingId?: number;
  roomId: number;
  bookingDate: Date;
  numberOfGuests: number;
  checkinTime: Date;
  checkoutTime: Date;
  guestEmail: string;
  guestName: string;
  guestAdress: string;
  bookingAmount: number;
  guestPhone: number;
}
