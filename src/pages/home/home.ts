import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductProvider } from '../../providers/api/product';
import { ProductDetailPage } from '../product-detail/product-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public allProducts = [];

  constructor(
    public navCtrl: NavController, 
    private productService: ProductProvider) {

  }

  ionViewDidLoad(){
    this.productService.getProducts()
      .subscribe(response => this.allProducts = response);
  }
  
  goToProductDetailPage(product){
    this.navCtrl.push(ProductDetailPage, {
      productDetails: product
    });
  }  

}
