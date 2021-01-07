import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {
  recipes: Recipe[];
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private RecipesService: RecipesService) { }

  ngOnInit() {

  }

  ionViewDidEnter() {
    this.recipes = this.RecipesService.getAllRecipes();
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

}
