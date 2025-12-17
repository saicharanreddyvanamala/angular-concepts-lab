// Below is the refresh token example. They are kept in comments because we sont have the AuthService and refresh methods now.

// import { HttpInterceptorFn, HttpErrorResponse } from "@angular/common/http";
// import { inject } from '@angular/core';
// import { AuthService } from "../services/auth.service";
// import { catchError, switchMap, throwError } from "rxjs";

// export const tokenRefreshInterceptor: HttpInterceptorFn = (req, next) => {

//   const auth = inject(AuthService);

//   // Add token before request
//   const authReq = req.clone({
//     setHeaders: {
//       Authorization: `Bearer ${auth.getToken()}`
//     }
//   });

//   return next(authReq).pipe(
//     catchError((err: HttpErrorResponse) => {

//       if (err.status === 401) {
//         // Token expired → refresh it
//         return auth.refreshToken().pipe(
//           switchMap(newToken => {
//             // update token
//             auth.saveToken(newToken);

//             // retry same request with new token
//             const retryReq = req.clone({
//               setHeaders: {
//                 Authorization: `Bearer ${newToken}`
//               }
//             });

//             return next(retryReq);
//           })
//         );
//       }

//       return throwError(() => err);
//     })
//   );
// };
