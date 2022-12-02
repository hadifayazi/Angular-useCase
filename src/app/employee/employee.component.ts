import { Component, OnInit, Optional, Self, SkipSelf } from '@angular/core';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [RoomsService],
})
export class EmployeeComponent implements OnInit {
  employeeName: string = 'John Doe';
  constructor(@Self() private roomsSerive: RoomsService) {}

  ngOnInit(): void {}
}
