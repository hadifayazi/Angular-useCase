import { Component, OnInit, Input } from '@angular/core';
import { RoomList } from '../roomInterface';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
})
export class RoomsListComponent implements OnInit {
  @Input() rooms: RoomList[] = [];
  constructor() {}

  ngOnInit(): void {}
}
