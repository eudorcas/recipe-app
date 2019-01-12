import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipe: Recipe[] = [
        new Recipe('Test recipe', 'This is a simple test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
        new Recipe('Test recipe 2', 'This is a simple test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg')
    ];

    @Output() recipeWasSelected = new EventEmitter<Recipe>();

    constructor() {
    }

    ngOnInit() {
    }

    onRecipeSelected(rec: Recipe) {
        this.recipeWasSelected.emit(rec);
    }

}
