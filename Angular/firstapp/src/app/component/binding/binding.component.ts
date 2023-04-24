import { Component} from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent{
        productId: number = 1765423;
        description = "Apple Mac Book - Retina Eye";
        qty: number = 50;
        price: number = 200000.0;
        available: string = 'green';
        notavailable: string = 'red';
        delivery: string = 'red';
        orderedQty: number = 0;
        isMember = false;
        isQtyAvailable = this.qty>0;
        
        items : Item[] = [
          new Item(1,'iphone 14','smartphone',70000,12),
          new Item(2,'samsung s22','smartphone',90000,8),
          new Item(3,'oneplus','smart mobile',130000,9)
        ];

       

        takeOrder():void{
          console.log("order placed");
          console.log("Quantity placed",this.orderedQty);
        }
        products = [
            {"id":1,"name":"Licensed Frozen Hat","description":"Incidunt et magni","price":"170.00","quantity":56840},
            {"id":2,"name":"Rustic Concrete Chicken","description":"Sint libero mollitia","price":"302.00","quantity":9358},
            {"id":3,"name":"Fantastic Metal Computer","description":"In consequuntur cupiditat","price":"279.00","quantity":90316},
            {"id":4,"name":"Refined Concrete Chair","description":"Saepe nemo praesentium","price":"760.00","quantity":5899}
        ];

        
      
      
        
        
        }

