import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  product = "mobile";
  price = 10000;
  color = "black";

  constructor() { }

  increaceprice(){
    this.price++;
  }

  decreaceprice(){
    this.price--;
  }
}
