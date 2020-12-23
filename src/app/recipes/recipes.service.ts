import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://dannwoellertthefoodetymologist.files.wordpress.com/2015/10/schnitzel-7_edited.jpg',
      ingredients: ['French Fries','Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://www.goya.com/media/4173/creole-spaghetti.jpg?quality=80',
      ingredients: ['Spaghetti','Meat', 'Tomatoes']
    }
  ]

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })};
  }
}
