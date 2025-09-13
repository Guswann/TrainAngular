import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SamplePage } from './SamplePage/samplepage/samplepage';
import { Product } from './product/product';


const routes: Routes = [
  { path: 'sample-page', component: SamplePage },
  { path: 'products', component: Product }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
