import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Eventually learn how to use Angular-Router
  displayRecipes: boolean = false;
  displayShoppingList: boolean = false;

  // TODO: Add past-tense parent-handler() for the emitted Angular event
  handleNavbarSelected(event): void {
    console.log(event);
    if (event === 0 ) { 
      this.displayRecipes = true
      this.displayShoppingList = false;
    } else if (event === 1) {
      this.displayShoppingList = true;
      this.displayRecipes = false;
    };
  }
}
