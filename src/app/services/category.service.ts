import { Injectable } from '@angular/core';
import { Category } from '../Category/category';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({  providedIn: 'root'})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }



  GetCategories(): Observable<Category[]> {

    return this.httpClient.get<Category[]>("http://localhost:3000/categories")
      .pipe(tap(data => {
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
    return throwError( errorMessage);
  }
}
