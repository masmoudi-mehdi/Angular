import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe : any;
  constructor() { }

  ngOnInit(): void {
  }

  // dataCollected(data:any){
  //   this.elementSelected = data;
  // }
}
