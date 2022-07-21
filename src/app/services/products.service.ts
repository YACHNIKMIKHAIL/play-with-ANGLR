import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, delay, Observable, retry, tap, throwError} from "rxjs";
import {IProduct} from "../models/product";
import {ErrorService} from "./error.service";
import {products} from "../data/products";

const baseUrl = 'https://fakestoreapi.com/products'

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) {
  }

  products: IProduct[] = []

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(baseUrl, {
      params: new HttpParams({
        fromObject: {'limit': 10}
      })
    }).pipe(delay(2000),
      retry(2),
      tap(products => this.products = products),
      catchError(this.errorHandler.bind(this)))
  }

  private errorHandler(err: HttpErrorResponse) {
    this.errorService.handle(err.message)
    return throwError(() => err.message)
  }

  create(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(baseUrl, product)
      .pipe(
        tap(product => this.products.unshift(product))
      )
  }
}
