import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms/roomInterface';
import { environment } from '../../environments/environment';
import { APP_SERVICE_CONFIG } from '../AppConfig/appconfig.service';
import { AppConfig } from '../AppConfig/appconfig.interface';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomList: RoomList[] = [];
  apiUrl = 'https://127.0.0.1:8000/api/room_lists.json';

  constructor(
    private httpClient: HttpClient,
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig
  ) {
    console.log(this.config.apiEndpoint);
  }

  getrooms() {
    return this.httpClient.get<RoomList[]>(this.apiUrl);
  }
}
