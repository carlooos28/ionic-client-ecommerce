import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class ProductProvider {

  constructor(public http: Http) {
    console.log('Product Provider');
  }

  getProducts(){
    return this.http.get("http://localhost:3000/products")
      .map(response => response.json());
  }

}