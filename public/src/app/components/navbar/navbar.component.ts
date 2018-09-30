import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  bool: boolean = false;

  @Output() boolEvent = new EventEmitter<boolean>();

  constructor() { }

  sendBool() {
    if (this.bool === false)
      this.bool = true;
    else
      this.bool = false;
    this.boolEvent.emit(this.bool);
  }

}
