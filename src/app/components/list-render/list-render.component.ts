import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals: Animal[]= [
    {name: "Frô", type: "Cat", age: 10},
    {name: "Memi", type: "Cat", age: 10},
    {name: "Chopper", type: "Dog", age: 0.6},
    {name: "Hórus", type: "Dog", age: 6.5},
  ];

  animalDetails = ''

  constructor() { }

  ngOnInit(): void {
  }

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`

  }
}
