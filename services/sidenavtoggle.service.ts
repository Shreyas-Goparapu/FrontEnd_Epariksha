import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavtoggleService {

  constructor() { }
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
