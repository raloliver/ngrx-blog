import {Injectable} from '@angular/core';

@Injectable()
export class PersistanceService {
  set(key: string, data: any) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('Error to saving in localStorage!!!', error);
    }
  }

  get(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.error('Error to get from localStorage!!!', error);
      return null;
    }
  }
}
