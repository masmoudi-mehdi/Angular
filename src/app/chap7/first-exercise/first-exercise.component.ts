import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-exercise',
  templateUrl: './first-exercise.component.html',
  styleUrls: ['./first-exercise.component.css']
})
export class FirstExerciseComponent implements OnInit {
  numbers = [1, 2, 3, 4, 5];
  oddNubers = [1, 3, 5];
  evenNuber = [2, 4];
  onlyOdd = false;
  value= 10;
  
  constructor() { }

  ngOnInit(): void {
  }

}
