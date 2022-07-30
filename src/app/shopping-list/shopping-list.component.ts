import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients : Ingredient [] = [new Ingredient ('Maça', 10), new Ingredient ('Laranja', 15)];
  constructor() { }

  ngOnInit(): void {
  }
}