import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[],args: string): any {

    args=args?args.toLocaleLowerCase():args;
    return args?value.filter(p=>p.productname.toLocaleLowerCase().indexOf(args)!==-1 ||
    
    p.description.toLocaleLowerCase().indexOf(args)!==-1):value;
  }

}
