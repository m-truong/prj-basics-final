import {
  Directive,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewContainerRef,
  HostBinding,
  HostListener,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appDropdownDirective]",
})
export class DropdownDirective implements OnInit, OnDestroy {
  constructor(
    private elRef: ElementRef,
    private vcRef: ViewContainerRef,
    private renderer: Renderer2
  ) {}

  // class is an array
  @HostBinding("class.open") openCSS: boolean = false;
  toggled: boolean = false;

  // AC's:
  // WHEN user clicks on the element this custom-attribute directive sits on
  // THEN a CSS class gets applied
  // WHEN clicked again
  // THEN the same CSS class gets removed
  @HostListener("click") onClickApplyOpenCSSClass(eventData: Event) {
    // if (!this.toggled) {
    //   // toggles Open, if initial state is 'closed' i.e. 'false'
    //   this.renderer.addClass(this.elRef.nativeElement, "open");
    //   this.toggled = !this.toggled; // then sets to 'true'
    // } else {
    //   // this else enters if ALREADY OPENED, then removes class
    //   this.renderer.removeClass(this.elRef.nativeElement, "open");
    //   this.toggled = !this.toggled;
    // }
    this.openCSS = !this.openCSS;
  }

  // @HostListener("document:click", ["$event"]) toggleOpen(event: Event) {
  //   this.openCSS = this.elRef.nativeElement.contains(event.target)
  //     ? !this.openCSS
  //     : false;
  // }

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
