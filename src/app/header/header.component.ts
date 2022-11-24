import { Component, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
// TODO: Add an *ngIf ; to conditionally render either <app-recipes> and <app-shopping-list> 
@ViewChild('recipes') recipes: ElementRef;
@ViewChild('shoppingList') shoppingList: ElementRef;

  @Output() recipesIsSelected: EventEmitter<any> = new EventEmitter();
  @Output() shoppingListIsSelected: EventEmitter<any> = new EventEmitter();

  headerDropdownSelected(event): void {
    console.log(`i've been clicked + ${event}`);
    console.log(event.target);
    const anchorElem = event.target
    console.log(anchorElem);
    (anchorElem.innerHTML === `Recipes`) ? this.recipesIsSelected.emit(0): this.shoppingListIsSelected.emit(1);
  }

  // TODO: implement ng-lifecycle hook for Angular
  ngAfterViewInit() {
    console.log(this.recipes.nativeElement)
    console.log(this.shoppingList.nativeElement)
  }
}
