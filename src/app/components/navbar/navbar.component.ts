import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  toggleNavbar = true;
  numberOfProducts: number = 0;

  constructor() { }

  ngOnInit(): void {
   this.numberOfProducts = Number(localStorage.getItem("total"));
  }

}
