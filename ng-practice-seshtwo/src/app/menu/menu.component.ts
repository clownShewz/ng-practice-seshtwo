import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 navlinks: any[] = [
      {route: 'home', name: 'Home'} ,
      {route: 'form' ,  name: 'Form'} ,
      {route: 'admin' , name: 'Admin'} ,
      {route: 'about' , name: 'About'}
    ];

  constructor() { }

  ngOnInit() {
  }

}
