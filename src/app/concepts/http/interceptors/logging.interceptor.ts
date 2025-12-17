import { HttpInterceptorFn } from "@angular/common/http";
import { tap } from "rxjs";


export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('LoggingInterceptor -> Request URL:', req.url);

  return next(req).pipe(
    tap(() => {
      console.log('LoggingInterceptor <- Response received');
    })
  );
};


// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { Observable, tap } from "rxjs";

// @Injectable()
// export class LoggingInterceptor implements HttpInterceptor {

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     console.log('LoggingINterceptor -> Request URL:', req.url);

//     return next.handle(req).pipe(
//       tap(event => {
//         console.log('LoggingInterceptor <- Response received');
//       })
//     );
//   }
// }
