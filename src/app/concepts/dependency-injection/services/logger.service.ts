import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  isLogged = true;

  log(message: string){
    console.log('Logger service logged a message: ', message);
  }
}
