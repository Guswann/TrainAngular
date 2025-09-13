import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SamplePage } from './SamplePage/samplepage/samplepage';
import { Product } from './product/product';
import { Home } from './home/home';
import { ProductForm } from './product/product-form/product-form';
import { Category } from './category/category';
import { CategoryForm } from './category/category-form/category-form';


const routes: Routes = [
  { path: '', component: Home },
  { path: 'sample-page', component: SamplePage },
  { path: 'products', component: Product },
  { path: 'product/form', component: ProductForm },
  { path: 'product/form/:id', component: ProductForm },
  { path: 'category', component: Category },
  { path: 'category/form', component: CategoryForm },
  { path: 'category/form/:id', component: CategoryForm },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
