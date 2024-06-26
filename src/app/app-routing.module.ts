import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthComponentComponent } from './auth-component/auth-component.component';
import { ItemListComponent } from './list-component/item-list/item-list.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { DescriptionComponentComponent } from './description-component/description-component.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponentComponent
  },
  {
    path: 'auth',
    component: AuthComponentComponent
  },
  {
    path: 'home',
    component: HomeComponentComponent
  },
  {
    path: 'list',
    component: ItemListComponent
  },
  {
    path: 'desc',
    component: DescriptionComponentComponent
  }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
