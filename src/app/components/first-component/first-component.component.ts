import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Guilherme';
  age: number = 18;
  job = 'Programador'
  hobbies = ['Estudar', 'Ler', 'Cantar'];
  car = {
    name: 'Polo',
    year: 2019,
  }


  constructor() { }

  ngOnInit(): void {
  }

}
