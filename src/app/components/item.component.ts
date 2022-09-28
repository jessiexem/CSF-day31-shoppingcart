import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Item } from '../itemModels';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Output()
  onAddToCart = new Subject<Item>()

  @Input()
  item!: Item

  itemForm!: FormGroup

  numbers!: number []
  itemQuantity!: number [];
  

  constructor(private fb: FormBuilder) {
    console.info(">>>fb:", fb)
    this.fb = fb
    this.itemQuantity = Array(10).fill(0).map((x,i)=>i+1);
    
  }


  ngOnInit(): void {

    this.itemForm = this.fb.group ( {
      name: this.fb.control<string>(this.item?.name, [Validators.required, Validators.maxLength(3)]),
      unitPrice: this.fb.control<number>(this.item?.unitPrice, [Validators.required, Validators.min(0.1)]),
      quantity: this.fb.control<number>(this.item?.quantity, [Validators.required, Validators.min(1)])
    })
  }

  addToCart() {
    console.info("Add button clicked")
    console.info('>>>> itemForm:', this.itemForm.value)

    const item: Item = this.itemForm.value as Item
    
    this.onAddToCart.next(item)

    //to reset the form once you add
    this.itemForm.reset()
  }

}

function i(arg0: any, i: any): number[] {
  throw new Error('Function not implemented.');
}

