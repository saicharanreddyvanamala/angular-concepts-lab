import { InjectionToken } from "@angular/core";

export const API_URL = new InjectionToken<string>('API_URl');

//InjectionToken creates a unique, typed key for DI
/**✔ Exists at runtime
✔ Type-safe
✔ Unique
✔ Tree-shakable */
