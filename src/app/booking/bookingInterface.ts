export interface Booking {
  bookingId?: number;
  roomId: number;
  bookingDate: Date;
  numberOfGuests: number;
  bookingPrice: number;
  bookingStatus: string;
  checkinTime: Date;
  checkoutTime: Date;
  guestEmail: string;
  guestName: string;
  guestAdress: string;
  guestPhone: number;
  guestList: Guest[];
}
