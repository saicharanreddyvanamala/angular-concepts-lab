import { HttpInterceptorFn } from "@angular/common/http";
import { tap } from "rxjs";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('AuthInterceptor -> Adding Authorization header');

  const modifiedReq = req.clone({
    setHeaders: {
      Authorization: 'Bearer sample-token-1234'
    }
  });
  return next(modifiedReq)
}


// In latest angular versions form 16 to 20 the recommended interceptor type is the functional interceptor instead of the class based interceptor
//Reasons for the change:
// Reason	Explanation
// Less boilerplate	No class, no @Injectable()
// Tree-shakable	Better bundle size
// Better typing	No HttpHandler vs HttpHandlerFn confusion
// Works naturally with standalone APIs	Matches provideHttpClient()
// Easier composition	Functions compose better than classes
// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { Observable } from "rxjs";

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     console.log('AuthInterceptor -> Adding Authorization header');

//     const modifiedReq = req.clone({
//       setHeaders: {
//         Authorization: 'Bearer sample-token-1234'
//       }
//     });

//     return next.handle(modifiedReq); // MUST return this
//   }
// }
