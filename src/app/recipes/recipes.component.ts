import { Component, HostListener, OnInit } from "@angular/core";
import { Recipe } from "./recipe.model";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"],
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor() {}

  ngOnInit() {}

  // @HostListener("recipeSelected", ["$event"])
  // handleRecipeSelectedFromRecipeItemComponent(event: any): void {
  //   console.log("this was selected", event.detail);
  //   this.selectedRecipe = event.detail;
  // }
}
