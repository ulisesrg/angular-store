import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { DemoComponent } from './demo/demo.component';
// import { HomeComponent } from './home/home.component';
// import { ProductsComponent } from './products/products.component';
// import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        // component: HomeComponent,
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'products',
        // component: ProductsComponent,
        loadChildren: () =>
          import('./products/products.module').then((m) => m.ProductsModule),
      },
      {
        path: 'product/:id',
        component: ProductDetailComponent,
      },
      {
        path: 'contact',
        // component: ContactComponent,
        loadChildren: () =>
          import('./contact/contact.module').then((m) => m.ContactModule),
      },
    ],
  },
  {
    path: 'demo',
    component: DemoComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
