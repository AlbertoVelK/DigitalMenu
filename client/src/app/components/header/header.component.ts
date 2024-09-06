import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { NavBtnComponent } from '../nav-btn/nav-btn.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavBtnComponent, SearchBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
