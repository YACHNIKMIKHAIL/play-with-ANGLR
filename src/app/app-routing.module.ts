import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductPageComponent} from "./pages/product-page/product-page.component";
import {AboutPageComponent} from "./pages/about-page/about-page.component";

enum RoutesEnum {
  product = '',
  about = 'about'
}

const routes: Routes = [
  {path: RoutesEnum.product, component: ProductPageComponent},
  {path: RoutesEnum.about, component: AboutPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
