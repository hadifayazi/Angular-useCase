import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoggerService } from 'src/app/services/logger.service';
import { RoomsService } from 'src/app/services/rooms.service';

import { RoomsListComponent } from './rooms-list.component';

describe('RoomsListComponent', () => {
  let component: RoomsListComponent;
  let fixture: ComponentFixture<RoomsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomsListComponent],
      imports: [HttpClientModule],
      providers: [LoggerService, RoomsService],
    }).compileComponents();

    fixture = TestBed.createComponent(RoomsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
