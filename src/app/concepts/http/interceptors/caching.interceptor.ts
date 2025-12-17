import { HttpInterceptorFn } from "@angular/common/http";
import { shareReplay } from "rxjs";

const cache = new Map<string, any>();

export const cachingInterceptor: HttpInterceptorFn = (req, next) => {

  if (req.method !== "GET") {
    return next(req); // only cache GET calls
  }

  const url = req.urlWithParams;

  if (cache.has(url)) {
    console.log("Returning cached response:", url);
    return cache.get(url);
  }

  const response$ = next(req).pipe(
    shareReplay({ bufferSize: 1, refCount: true })
  );

  cache.set(url, response$);

  return response$;
};
