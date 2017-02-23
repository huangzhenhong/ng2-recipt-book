import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { Response } from '@angular/http';

import { RecipeService } from './recipes/recipe.service';

@Component({
  selector: 'rb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private recipeServie: RecipeService) { }

  ngOnInit() {
  }

  onStore(){
    this.recipeServie.storeData().subscribe(
      (data:Response)  => console.log(data),
      error => console.log(error)
    );
  }

  onFetch(){
    this.recipeServie.fetchData();
  }
}
