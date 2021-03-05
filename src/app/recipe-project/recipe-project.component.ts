
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-project',
  templateUrl: './recipe-project.component.html',
  styleUrls: ['./recipe-project.component.css']
})
export class RecipeProjectComponent implements OnInit {
  loadedFeature = "recipe"

  constructor() { }

  ngOnInit(): void {
  }

  onNavigate(feature:string){
    this.loadedFeature = feature;
  }

 
}
