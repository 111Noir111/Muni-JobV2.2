import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'}) // Cambiado de Headers a headers
};


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private apiUrl = 'https://randomuser.me/api/?results=10';

  constructor(private http: HttpClient) { }

  getDataUser(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }
}
