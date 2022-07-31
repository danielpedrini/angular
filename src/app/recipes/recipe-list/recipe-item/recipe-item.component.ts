import { Recipe } from './../../recipe.model';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent {
  @Output() recipeSelected: EventEmitter<void> = new EventEmitter();
  @Input() recipe: Recipe;

  onSelected() {
    this.recipeSelected.emit();
  }
  
}
