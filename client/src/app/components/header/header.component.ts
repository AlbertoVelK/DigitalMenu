import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { NavBtnComponent } from '../nav-btn/nav-btn.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { BehaviorSubject } from 'rxjs';
import { setTimeout } from 'node:timers/promises';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavBtnComponent, SearchBarComponent, NavBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss' 
})
export class HeaderComponent{
  
  nav: boolean = false;

  receiveBool($event: boolean){
    this.nav = $event;
  }
}
