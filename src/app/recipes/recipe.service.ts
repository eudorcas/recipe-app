import { EventEmitter } from '@angular/core';
import {Recipe} from './recipe.model';

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipe: Recipe[] = [
        new Recipe('Test recipe', 'This is a simple test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
        new Recipe('Test recipe 2', 'This is a simple test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg')
    ];

    getRecipes() {
        return this.recipe.slice();
    }
}