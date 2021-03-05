import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired :any = new EventEmitter()
  interval : any;
  lastNumber = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStart(){
    this.interval = setInterval(()=>{
      this.intervalFired.emit(this.lastNumber + 1)
      this.lastNumber++;
    },1000)
  }

  onStop(){
    clearInterval(this.interval);
  }

}
