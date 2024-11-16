import { Component } from '@angular/core';

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
  constructor() {}

}
