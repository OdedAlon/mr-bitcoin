import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public saveToStorage(key: string, val: JSON) {
      localStorage.setItem(key, JSON.stringify(val))
  }

  public loadFromStorage(key: string) {
      var val = localStorage.getItem(key)
      return JSON.parse(val)
  }
}
