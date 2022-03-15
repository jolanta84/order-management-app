import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, concatMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AccountService } from '../_services/account.service';




@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private accountService: AccountService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request).pipe(catchError(err => {
        

          const error = err.error?.message || err.statusText;
          console.error(err);
          return throwError(error);
      }));
  }
}
