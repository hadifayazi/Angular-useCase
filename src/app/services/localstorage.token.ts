import { InjectionToken } from '@angular/core';

export const LocoalStorageToken = new InjectionToken<any>('local storage', {
  providedIn: 'root',
  factory() {
    return localStorage;
  },
});
