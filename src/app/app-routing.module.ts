import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { VariantComponent } from './components/variant/variant.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'variant',
    component: VariantComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
