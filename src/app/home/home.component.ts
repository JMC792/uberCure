import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {
    $('.dropdown').dropdown()

    $(".alert").alert()

    $('#myModal').modal()

  
    
  }

  
  
  
}