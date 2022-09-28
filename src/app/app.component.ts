import { Component } from '@angular/core';
import { Item } from './itemModels';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  cartItems: Item[] = []
  total = 0;


  newItemAdded(item: Item) {
    console.info("new item added:",item)
    this.cartItems.push(item)
    //console.info("---current added items:",this.addedItems.join(","))
    this.total+=item.quantity*item.unitPrice
  }

  itemDeleted(item: Item) {
    console.info("item removed:",item)
    const index = this.cartItems.indexOf(item);
    this.cartItems.splice(index,1);
    this.total-=item.quantity*item.unitPrice
  }
}
