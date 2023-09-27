import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomerMainViewRoutingModule } from './customer-main-view-routing.module';
import { HeaderComponent } from './shared-components/header/header.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import { MainPageComponent } from './shared-components/main-page/main-page.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import { ArtGalleryPicturesExploreComponent } from './components/art-gallery-pictures-explore/art-gallery-pictures-explore.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { PaintingDetailsComponent } from './components/painting-details/painting-details.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './shared-components/login/login.component';
import { RegisterComponent } from './shared-components/register/register.component';
import { PaintingCardComponent } from './components/painting-card/painting-card.component';


@NgModule({
  declarations: [
    HeaderComponent
  ,FooterComponent, MainPageComponent, ArtGalleryPicturesExploreComponent, CategoriesComponent, PaintingDetailsComponent, CartComponent, LoginComponent, RegisterComponent, PaintingCardComponent, ],
  imports: [
    CommonModule,
    CustomerMainViewRoutingModule,
    MatToolbarModule,  
    MatIconModule,
    MatSlideToggleModule,
    MatExpansionModule,
    FormsModule
  ]
})
export class CustomerMainViewModule { }
