import { Component } from '@angular/core';
import {PageScrollConfig} from 'ng2-page-scroll';


@Component({
  selector: 'app-root',
  template: '\
    <app-navbar></app-navbar>\
    <app-intro></app-intro>\
    <app-about></app-about>\
    <app-services></app-services>\
    <app-contact></app-contact>\
  '
})

// <app-pricing></app-pricing>\
// <app-contact></app-contact>\

export class AppComponent {
  constructor() {
    PageScrollConfig.defaultScrollOffset = 150;
    PageScrollConfig.defaultEasingLogic = {
      ease: (t: number, b: number, c: number, d: number): number => {
        // easeInOutExpo easing
        if (t === 0) return b;
        if (t === d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
      }
    };
  }
}
