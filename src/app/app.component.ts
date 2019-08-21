import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: "\
    <app-navbar></app-navbar>\
    <app-intro></app-intro>\
  "
  // <app-services></app-services>\
  //   <app-about></app-about>
})
export class AppComponent {
  constructor() {}
}
