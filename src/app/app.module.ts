import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { IntroComponent } from "./intro/intro.component";
import { AboutComponent } from "./about/about.component";
import { PricingComponent } from "./pricing/pricing.component";
import { ContactComponent } from "./contact/contact.component";
import { ContactFormComponent } from "./contact/contact-form.component";
import { ServicesComponent } from "./services/services.component";
import { NgxPageScrollCoreModule } from "ngx-page-scroll-core";

@NgModule({
  imports: [BrowserModule, FormsModule, NgxPageScrollCoreModule],
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
export class AppModule {}
