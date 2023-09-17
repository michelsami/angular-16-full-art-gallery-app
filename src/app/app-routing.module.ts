import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerMainViewModule } from './modules/customer-main-view/customer-main-view.module';


const routes: Routes = [
  { path:'', loadChildren: () => CustomerMainViewModule },
  { path:'**', loadChildren: () => CustomerMainViewModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
