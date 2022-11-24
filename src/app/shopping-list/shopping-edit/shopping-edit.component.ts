import {
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
} from "@angular/core";
import { Ingredient } from "../../shared/ingredient.model";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"],
})
export class ShoppingEditComponent implements OnInit, DoCheck, AfterViewInit {
  // TODO: Add 'dependency-injection' here!
  constructor() {}

  @ViewChild("nameInput") nameInput: ElementRef;
  @ViewChild("amountInput") amountInput: ElementRef;

  @Output() newIngredientCreated: EventEmitter<Ingredient> =
    new EventEmitter<Ingredient>();

  ngOnInit(): void {}

  ngDoCheck(): void {}

  ngAfterViewInit(): void {}

  // TODO: add logic to create new Ingredient() one AddButton click
  createIngredient(event: any): void {
    console.log(`first log inside shopping-edit`, event);
    const newIngredient: Ingredient = new Ingredient(
      this.nameInput.nativeElement.value,
      this.amountInput.nativeElement.value
    );
    this.newIngredientCreated.emit(newIngredient);
  }
}
