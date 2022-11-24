import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../../recipe.model";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.css"],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeInput: Recipe;
  @Output() recipeSelected: EventEmitter<void> = new EventEmitter<void>();

  // @Output() recipeWasSelected: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onSelected(): void {
    this.recipeSelected.emit();
    // New Technique of using CustomEvent
    // const event: CustomEvent = new CustomEvent("recipeSelected", {
    //   bubbles: true,
    //   detail: this.recipeInput,
    // });
  }
}
