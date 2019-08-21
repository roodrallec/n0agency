import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template:
    "\
    <app-navbar></app-navbar>\
    <app-intro></app-intro>\
    <app-about></app-about>\
    <app-services></app-services>\
    <app-contact></app-contact>\
  "
})
export class AppComponent {
  constructor() {}
}
