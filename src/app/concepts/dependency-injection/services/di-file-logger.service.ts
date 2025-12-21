import { Injectable } from "@angular/core";

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class DIFileLoggerService {
  isLogged = false;
  log(message: string){
    console.log('File Logger service logged a message: ', message);
  }
}
