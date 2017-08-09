import { Component } from '@angular/core';

import { Contact }    from './contact';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html'
})
export class ContactFormComponent {

  model = new Contact(1,
                      'Jorge', 'Alexander',
                      'jorgeNalexander1@gmail.com',
                      'Contact me please!')

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newContact() {
    this.model = new Contact(42, '', '', '', '');
  }
}
