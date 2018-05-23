import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cources',
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let cource of courses">
        {{ cource }}
      </li>
    </ul>
  `
})

export class CourcesComponent {

  title = "List of cources";
  cources;

  constructor() {
  //  this.cources = service.getCourses();
  }
 
}
