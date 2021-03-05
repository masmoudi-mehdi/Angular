import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-assignment',
  templateUrl: './third-assignment.component.html',
  styleUrls: ['./third-assignment.component.css']
})
export class ThirdAssignmentComponent implements OnInit {

  showPassword = false;
  totalclick : any[] = [];


  constructor() { }

  ngOnInit(): void {
  }

  // buttonclicked(){
  //   this.showPassword = !this.showPassword;
  //   this.totalclick.push(this.totalclick.length + 1);
  // }

  // other method

  buttonclicked(){
    this.showPassword = !this.showPassword;
    this.totalclick.push(new Date());
  }
}
