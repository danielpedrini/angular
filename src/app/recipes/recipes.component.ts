import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.model';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}
  selectedRecipe: Recipe;
  
  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
      this.selectedRecipe = recipe
    });
  }
}
