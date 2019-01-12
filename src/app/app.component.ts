import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    chosen = 'recipes';

    recipeChosen() {
        this.chosen = 'recipes';
    }

    shoppingChosen() {
        this.chosen = 'shopping';
    }
}


