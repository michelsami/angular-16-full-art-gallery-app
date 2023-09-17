import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './shared-components/main-page/main-page.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { ArtGalleryPicturesExploreComponent } from './components/art-gallery-pictures-explore/art-gallery-pictures-explore.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { PaintingDetailsComponent } from './components/painting-details/painting-details.component';
import { CartComponent } from './components/cart/cart.component';
import { RegisterComponent } from './shared-components/register/register.component';
import { LoginComponent } from './shared-components/login/login.component';

const routes: Routes = [
  { path:'', component: MainPageComponent, children:[
     {path: 'gallery', component: ArtGalleryPicturesExploreComponent},
     {path: '', component: CategoriesComponent},
     {path: 'painting-details/:paintingID', component: PaintingDetailsComponent },
     {path: 'cart', component: CartComponent },
     {path: 'login', component: LoginComponent },
     {path: 'register', component: RegisterComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerMainViewRoutingModule { }
