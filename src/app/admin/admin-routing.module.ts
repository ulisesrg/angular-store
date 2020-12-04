import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductCreationFormComponent } from './components/product-creation-form/product-creation-form.component';
import { ProductEditionFormComponent } from './components/product-edition-form/product-edition-form.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'create',
        component: ProductFormComponent,
      },
      // {
      //   path: '',
      //   component: DashboardComponent,
      // },
      // {
      //   path: 'table',
      //   component: TableComponent,
      // },
      {
        path: 'products',
        component: ProductsListComponent,
      },
      {
        path: 'products/create',
        component: ProductCreationFormComponent,
      },
      {
        path: 'products/edit/:id',
        component: ProductEditionFormComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
