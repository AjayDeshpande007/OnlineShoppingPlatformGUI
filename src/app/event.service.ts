import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  loginDetails: EventEmitter<string> = new EventEmitter<string>();
  isEnableLoginForm: EventEmitter<boolean> = new EventEmitter<boolean>();  
  constructor() { }
}
