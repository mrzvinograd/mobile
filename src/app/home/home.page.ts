import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  a = "17"
  b = "42"
  numers = ["a", "b"]
  books = [
    {q:"Фильм", n:"Bladeruner"},
    {q:"Музыка", n:"Afterlife"}
  ]
  lavina(){
    this.numers.splice(0);
  }
  constructor() {}

}
