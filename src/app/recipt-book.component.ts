import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipes/recipe.service';

@Component({
  selector: 'rb-recipt-book',
  templateUrl: './recipt-book.component.html',
  styles: [],
  providers: [RecipeService]
})
export class ReciptBookComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
