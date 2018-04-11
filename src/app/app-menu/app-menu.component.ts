import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css']
})
export class AppMenuComponent {
  showLogo: boolean = false;
  constructor(private element: ElementRef) {
  }

  @HostListener('window:scroll', [])
  public onWindowScroll(): void {
    const pageYOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (this.showLogo && pageYOffset < this.element.nativeElement.offsetTop) {
      this.showLogo = false;
    } else if (pageYOffset > this.element.nativeElement.offsetTop) {
      this.showLogo = true;
    }
  }
}

