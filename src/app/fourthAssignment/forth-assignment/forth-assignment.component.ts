import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forth-assignment',
  templateUrl: './forth-assignment.component.html',
  styleUrls: ['./forth-assignment.component.css']
})
export class ForthAssignmentComponent implements OnInit {
  OddNumbers : number[] = []
  evenNumbers : number[] = []
  constructor() { }

  ngOnInit(): void {
  }

  onGameStarted(number:number){
    if (number % 2 === 0) {
      this.evenNumbers.push(number)
    }
    else{
      this.OddNumbers.push(number)
    }
  }

}
