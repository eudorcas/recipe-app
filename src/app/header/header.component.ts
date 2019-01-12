import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    @Output() recipeClicked = new EventEmitter();
    @Output() listClicked = new EventEmitter();

    onRecipeClick() {
        this.recipeClicked.emit();
    }

    onShoppingClick() {
        this.listClicked.emit();
    }

}
