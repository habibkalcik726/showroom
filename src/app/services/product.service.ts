import { Injectable } from '@angular/core';
import { Product } from '../product/product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class ProductService {

  constructor(private httpClient: HttpClient) { }



  path = "http://localhost:3000/products";
  GetProducts(categoryId): Observable<Product[]> {
    let newpath = this.path;
    if (categoryId)
      newpath += "?categoryId=" + categoryId;

    return this.httpClient.get<Product[]>(newpath)
      .pipe(tap(data => {
        console.log(data);

      }),
        catchError(this.ProcessError));

  }

  AddProduct(product: Product): Observable<Product> {

    return this.httpClient.post<Product>(this.path, product).pipe(tap(data => {
      console.log(data);

    }),
      catchError(this.ProcessError));
  }

  ProcessError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent)
      errorMessage = "Exception: " + err.error.message;
    else
      errorMessage = "System Exception!";
    return throwError(errorMessage);
  }

}
