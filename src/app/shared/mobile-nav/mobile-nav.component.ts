import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss']
})
export class MobileNavComponent implements OnInit {
  showNav: boolean;

  constructor() { }

  ngOnInit() {
  }
  toggleNav(){
    this.showNav = !this.showNav
  }
}