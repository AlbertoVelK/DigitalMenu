import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  @Input() nav: boolean = false;
  @Output() clickEvent = new EventEmitter<boolean>();
  navClicked: boolean = false;

  closeMenuFnc(){
    this.nav = false;
  }

  sendBtnBool() {
    this.clickEvent.emit(this.navClicked)
  }
}
