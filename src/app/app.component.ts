import {Component, OnInit} from '@angular/core';
import {IProduct} from "./models/product";
import {products as data} from "./data/products";
import {ProductsService} from "./services/products.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-angular-app';
  products: IProduct[] = []

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.productsService.getAll().subscribe(products => {
      this.products = products
    })
  }
}
