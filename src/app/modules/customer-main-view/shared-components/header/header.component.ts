import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isNavOpen = false;

  onNavBtnClick(): void {
    this.isNavOpen = !this.isNavOpen;
  }

  onOverlayClick(): void {
    this.isNavOpen = false;
  }
}