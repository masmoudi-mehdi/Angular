import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-assignment',
  templateUrl: './second-assignment.component.html',
  styleUrls: ['./second-assignment.component.css']
})
export class SecondAssignmentComponent implements OnInit {
  username=''
  disabled = true

  constructor() { }

  ngOnInit(): void {
  }

  forButton(event:any){
    var value = (<HTMLInputElement>event.target).value
    if (value == '') {
      this.disabled = true
    }
    else{
      this.disabled = false
    }
  }

  resert(){
    this.username = ''
    this.disabled = true
  }
}
