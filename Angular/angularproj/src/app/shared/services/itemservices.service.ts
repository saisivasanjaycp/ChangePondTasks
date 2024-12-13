import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemservicesService {

  constructor() { }
  
  welcome(para:any,comp:any){
    window.alert(`welcome You ${para} in ${comp}`)
  }
}
