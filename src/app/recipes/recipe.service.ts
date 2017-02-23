import { Injectable, EventEmitter } from '@angular/core';
import { Http ,Headers, Response } from '@angular/http';

import { Recipe } from './recipe';
import { Ingredient } from '../ingredient';

@Injectable()
export class RecipeService {

  recipesChanged = new EventEmitter<Recipe[]>();

  constructor(private http: Http) { }

  private recipes: Recipe[] = [
    new Recipe('Tiger','Tiger','http://reciperenovator.com/wp-content/uploads/2014/06/Crepes.jpg',[
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('Buffer','Buffer','http://www.alliancebuffet.com.br/wp-content/uploads/2012/08/galerija8.jpg',[])
  ];

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number): Recipe{
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe),1);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe){
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData(){
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({'Content-Type':'application/json'});

    return this.http.put('https://recipebook-9f375.firebaseio.com/recipes.json', body, {headers});

  }
  fetchData(){
    return this.http.get('https://recipebook-9f375.firebaseio.com/recipes.json')
    .map((response: Response) => response.json())
    .subscribe(
      (data: Recipe[]) => {
        this.recipes = data;
        this.recipesChanged.emit(this.recipes);
      }
    );
  }
}
