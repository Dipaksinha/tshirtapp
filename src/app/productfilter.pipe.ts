import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './IProduct';

@Pipe({
  name: 'productfilter'
})
export class ProductfilterPipe implements PipeTransform {

  transform(value: IProduct[],args: number): unknown {
   if(!args){
     return value;
   }
  //  return value.filter(
  //    item => item.productName.toLowerCase().indexOf(args.toLocaleLowerCase()) > -1
  
  return value.filter(
    item => item.price > 50  
   );
  }

}
