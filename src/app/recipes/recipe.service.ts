import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>;
  private recipes: Recipe [] = [new Recipe('Fígado Acebolado', 
          'Um delicioso prato de Fígado acebolado', 
          'https://chefnachapa.com.br/wp-content/uploads/2021/10/Figado-acebolado.jpg',
          [new Ingredient('Figado', 10),
          new Ingredient('Cebola', 3)])];
  
  getRecipes() {
    return this.recipes.slice();
  }

  constructor(private slService: ShoppingListService) {}

  addIngredientsToSL(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

}
