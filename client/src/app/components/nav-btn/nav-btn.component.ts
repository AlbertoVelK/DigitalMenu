import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-btn',
  standalone: true,
  imports: [],
  templateUrl: './nav-btn.component.html',
  styleUrl: './nav-btn.component.scss'
})
export class NavBtnComponent {

  navClicked: boolean = true;

  @Output() clickEvent = new EventEmitter<boolean>();

  sendBtnBool() {
    this.clickEvent.emit(this.navClicked)
  }
}
