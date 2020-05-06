import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  googleUrl: String;
  facebookUrl: String;

  constructor() { }

  ngOnInit(): void {
    this.googleUrl = "https://www.google.co.th/";
    this.facebookUrl ="https://www.facebook.com/";
  }
  getUrlFacebook(){
    return this.facebookUrl;
  }

}
