import { Component, OnInit } from '@angular/core';
import { IProduct } from './IProduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Product App';
  imageHeight=65;
  imageWidth=50;
  imageMargin=2;
  searchText='';
  searchPrice=0;
  tdColor='red';
  products : IProduct[] =[];
  showImage = false;
  constructor(){
   
  }
  toggleImage(){
    this.showImage = !this.showImage;
  }
  ngOnInit(){
    this.products = this.getProducts();
    console.log(this.products);
  }

  // In real time this will be in service and data come from API
  getProducts() : IProduct[]{
    return [
      {
        "productID" : 1,
        "productName" : "Colors",
        "price" : 40,
        "quantity" : 45,
        "imageUrl":"assets/images/Tshirt1.jpg",
        "imageBackUrl" :"assets/images/tshirtb1.jpg",
        "imageOUrl" : "assets/images/Tshirt1.jpg"
      },
      {
        "productID" : 2,
        "productName" : "Nike",
        "price" : 105,
        "quantity" : 80,
        "imageUrl":"assets/images/Tshirt2.jpg",
        "imageBackUrl" :"assets/images/tshirtb2.jpg",
        "imageOUrl":"assets/images/Tshirt2.jpg"
        
      },
      {
        "productID" : 3,
        "productName" : "TQS",
        "price" : 60,
        "quantity" : 105,
        "imageUrl":"assets/images/Tshirt3.jpg",
        "imageBackUrl" :"assets/images/tshirtb3.jpg",
        "imageOUrl":"assets/images/Tshirt3.jpg"
        
      },
      {
        "productID" : 4,
        "productName" : "Kutton",
        "price" : 100,
        "quantity" : 200,
        "imageUrl":"assets/images/tshirt4.jpg",
        "imageBackUrl" :"assets/images/tshirtb4.jpg",
        "imageOUrl":"assets/images/tshirt4.jpg"
        
      },
      {
        "productID" : 5,
        "productName" : "Westend",
        "price" : 55,
        "quantity" : 100,
        "imageUrl":"assets/images/tshirt5.jpg",
        "imageBackUrl" :"assets/images/tshirtb5.jpg",
        "imageOUrl":"assets/images/tshirt5.jpg"
        
      }

    ]
  }

}
