import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {

      if (error.status === 0) {
        console.error("Network error or CORS issue");
      }
      else if (error.status === 400) {
        console.error("Bad Request:", error.error);
      }
      else if (error.status === 401) {
        console.error("Unauthorized - maybe token expired");
      }
      else if (error.status === 500) {
        console.error("Server Error:", error.message);
      }

      // rethrow so components know the error
      return throwError(() => error);
    })
  );
};
