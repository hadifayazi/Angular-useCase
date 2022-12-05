export interface Room {
  totalRooms: number;
  availableRooms: number;
  bookedRooms: number;
}

export interface RoomList {
  id: number;
  roomType: string;
  roomNumber: number;
  ameneties: string;
  price: number;
  image: string;
  checkinTime: Date;
  checkoutTime: Date;
}
