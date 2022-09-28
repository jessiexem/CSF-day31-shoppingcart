import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Item } from '../itemModels';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input()
  itemList!: Item []

  @Input()
  totalAmount = 0;

  @Output()
  onDeleteFromCart = new Subject<Item>()

  constructor(private fb: FormBuilder) {
    console.info(">>>fb:", fb)
    this.fb = fb
   }

  ngOnInit(): void {

  }


  deleteFromCart(item: Item){
    console.info("Delete button clicked")
    this.onDeleteFromCart.next(item)
}

}
