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
  searchPrice;
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
        //"imageUrl":"assets/images/Tshirt1.jpg",
        "imageUrl" : "https://raw.githubusercontent.com/Dipaksinha/tshirtapp/master/src/assets/images/Tshirt1.jpg",
        "imageBackUrl" :"https://raw.githubusercontent.com/Dipaksinha/tshirtapp/master/src/assets/images/tshirtb1.jpg",
        "imageOUrl" : "https://raw.githubusercontent.com/Dipaksinha/tshirtapp/master/src/assets/images/Tshirt1.jpg"
      },
      {
        "productID" : 2,
        "productName" : "Nike",
        "price" : 105,
        "quantity" : 80,
        "imageUrl":"https://raw.githubusercontent.com/Dipaksinha/tshirtapp/master/src/assets/images/Tshirt2.jpg",
        "imageBackUrl" :"https://raw.githubusercontent.com/Dipaksinha/tshirtapp/master/src/assets/images/tshirtb2.jpg",
        "imageOUrl":"https://raw.githubusercontent.com/Dipaksinha/tshirtapp/master/src/assets/images/Tshirt2.jpg"
        
      },
      {
        "productID" : 3,
        "productName" : "TQS",
        "price" : 60,
        "quantity" : 105,
        "imageUrl":"https://raw.githubusercontent.com/Dipaksinha/tshirtapp/master/src/assets/images/Tshirt3.jpg",
        "imageBackUrl" :"https://raw.githubusercontent.com/Dipaksinha/tshirtapp/master/src/assets/images/tshirtb3.jpg",
        "imageOUrl":"https://raw.githubusercontent.com/Dipaksinha/tshirtapp/master/src/assets/images/Tshirt3.jpg"
        
      },
      {
        "productID" : 4,
        "productName" : "Kutton",
        "price" : 100,
        "quantity" : 200,
        "imageUrl":"https://raw.githubusercontent.com/Dipaksinha/tshirtapp/master/src/assets/images/tshirt4.jpg",
        "imageBackUrl" :"https://raw.githubusercontent.com/Dipaksinha/tshirtapp/master/src/assets/images/tshirtb4.jpg",
        "imageOUrl":"https://raw.githubusercontent.com/Dipaksinha/tshirtapp/master/src/assets/images/tshirt4.jpg"
        
      },
      {
        "productID" : 5,
        "productName" : "Westend",
        "price" : 55,
        "quantity" : 100,
        "imageUrl":"https://raw.githubusercontent.com/Dipaksinha/tshirtapp/master/src/assets/images/tshirt5.jpg",
        "imageBackUrl" :"https://raw.githubusercontent.com/Dipaksinha/tshirtapp/master/src/assets/images/tshirtb5.jpg",
        "imageOUrl":"https://raw.githubusercontent.com/Dipaksinha/tshirtapp/master/src/assets/images/tshirt5.jpg"
        
      }

    ]
  }

}
