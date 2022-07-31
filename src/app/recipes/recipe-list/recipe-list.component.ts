import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  @Output() recipeWasSelected: EventEmitter<Recipe> = new EventEmitter();
  recipes: Recipe [] = [new Recipe('Fígado Acebolado', 'Um delicioso prato de Fígado acebolado', 'https://chefnachapa.com.br/wp-content/uploads/2021/10/Figado-acebolado.jpg')];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
    console.log("Recipe-list" + recipe);
  }
}
