import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
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

  ngOnInit() {
  }

}
