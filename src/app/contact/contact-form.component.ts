import { Component } from '@angular/core';

import { Contact }    from './contact';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html'
})
export class ContactFormComponent {

  model = new Contact(1, '', '', '', '');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  newContact() {
    this.model = new Contact(1, '', '', '', '');
  }
}
