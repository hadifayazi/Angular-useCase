export interface Room {
  totalRooms: number;
  availableRooms: number;
  bookedRooms: number;
}

export interface RoomList {
  roomType: string;
  roomNumber: number;
  ameneties: string;
  price: number;
  img: string;
  checkinTime: Date;
  checkoutTime: Date;
}
