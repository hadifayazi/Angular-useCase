import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms/roomInterface';
import { environment } from '../../environments/environment';
import { APP_SERVICE_CONFIG } from '../AppConfig/appconfig.service';
import { AppConfig } from '../AppConfig/appconfig.interface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomList: RoomList[] = [];
  apiUrl = 'https://127.0.0.1:8000/api/room_lists.json';
  photoUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(
    private httpClient: HttpClient,
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig
  ) {
    console.log(this.config.apiEndpoint);
  }

  // headers = new HttpHeaders({
  //   'content-type': 'application/json',
  // });
  getRooms$ = this.httpClient.get<RoomList[]>(this.apiUrl).pipe(shareReplay(1));

  getrooms() {
    return this.httpClient.get<RoomList[]>(this.apiUrl);
  }
  addRoom(room: RoomList) {
    return this.httpClient.post<RoomList[]>(this.apiUrl, room);
  }
  getPhoto() {
    const request = new HttpRequest('GET', this.photoUrl, {
      reportProgress: true,
    });
    return this.httpClient.request(request);
  }
}
