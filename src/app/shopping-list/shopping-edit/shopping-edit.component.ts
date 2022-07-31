import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent  {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amoutInput') amoutInputRef: ElementRef;
  ingredient: Ingredient;
  @Output() igredientAdded = new EventEmitter<Ingredient>();

  addIngredient() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmout = this.amoutInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmout);
    this.igredientAdded.emit(newIngredient);
    this.clearInput();
  }

  clearInput() {
    this.nameInputRef.nativeElement.value = '';
    this.amoutInputRef.nativeElement.value = '';
  }
}
