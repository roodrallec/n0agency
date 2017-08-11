import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './contact/contact-form.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    Ng2PageScrollModule.forRoot()
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroComponent,
    AboutComponent,
    PricingComponent,
    ContactComponent,
    ContactFormComponent,
    ServicesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
