import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HttpDashboard } from "./http-dashboard/http-dashboard";
import { HttpGetDemo } from "./http-get-demo/http-get-demo";
import { HttpTypedGetDemo } from "./http-typed-get-demo/http-typed-get-demo";
import { HttpAsyncGetDemo } from "./http-async-get-demo/http-async-get-demo";
import { HttpPostDemo } from "./http-post-demo/http-post-demo";
import { HttpUpdateDeleteDemo } from "./http-update-delete-demo/http-update-delete-demo";
import { HttpParamsDemo } from "./http-params-demo/http-params-demo";
import { HttpHeadersDemo } from "./http-headers-demo/http-headers-demo";
import { HttpErrorDemo } from "./http-error-demo/http-error-demo";
import { HttpInterceptorDemo } from "./http-interceptor-demo/http-interceptor-demo";
import { HttpApiServiceDemo } from "./http-api-service-demo/http-api-service-demo";
import { HttpRetryDemo } from "./http-retry-demo/http-retry-demo";
import { HttpFileUploadDemo } from "./http-file-upload-demo/http-file-upload-demo";
import { HttpFileDownloadDemo } from "./http-file-download-demo/http-file-download-demo";
import { HttpCancelDemo } from "./http-cancel-demo/http-cancel-demo";

export const routes: Routes = [
  {
    path: '', component: HttpDashboard
  },
  {
    path: 'get', component: HttpGetDemo
  },
  {
    path: 'typed-get', component: HttpTypedGetDemo
  },
  {
    path: 'async-get', component: HttpAsyncGetDemo
  },
  {
    path: 'post', component: HttpPostDemo
  },
  {
    path: 'update-delete', component: HttpUpdateDeleteDemo
  },
  {
    path: 'http-params', component: HttpParamsDemo
  },
  {
    path: 'http-headers', component: HttpHeadersDemo
  },
  {
    path: 'http-catchError', component: HttpErrorDemo
  },
  {
    path: 'interceptor', component: HttpInterceptorDemo
  },
  {
    path: 'user-crud', component: HttpApiServiceDemo
  },
  {
    path: 'http-retry', component: HttpRetryDemo
  },
  {
    path: 'http-file-upload', component: HttpFileUploadDemo
  },
  {
    path: 'http-file-download', component: HttpFileDownloadDemo
  },
  {
    path: 'http-cancel', component: HttpCancelDemo
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})

export class HttpModule {}
