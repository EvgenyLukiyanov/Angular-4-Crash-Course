import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnInit {

  isStar: boolean;

  constructor() { }

  ngOnInit() {
  }


  onClick(){
    this.isStar = !this.isStar;
  }

}
