import { Injectable } from '@angular/core';

declare let alertify:any;

@Injectable(
 
 // {  providedIn: 'root'} servisin global olması istendiğinde açılır.
)
export class NotificationService {

  constructor() { }

  Success(message:string){

    alertify.success(message);
  }
  Error(message:string){

    alertify.error(message);
  }
  Warn(message:string){

    alertify.warn(message);
  }
}
