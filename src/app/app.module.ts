import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { CollectionComponent } from './components/collection/collection.component';
import { HighlightItemComponent } from './components/highlight-item/highlight-item.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule} from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { ProductDetailsComponent } from './components/product-details/product-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SliderComponent,
    CollectionComponent,
    HighlightItemComponent,
    CheckoutComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCollapseModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    SimpleNotificationsModule.forRoot(),
    NgHttpLoaderModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
