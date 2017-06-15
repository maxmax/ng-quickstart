import { Component } from '@angular/core';

export class Item{
  purchase: string;
  done: boolean;
  price: number;

  constructor(purchase: string, price: number) {

    this.purchase = purchase;
    this.price = price;
    this.done = false;
  }
}

@Component({
  selector: 'purchase-app',
  template: `<div class="container">
    <br />
    <br />
    <div class="panel panel-default">
      <div class="panel-heading">Shopping list</div>
      <div class="panel-body">
        <div class="form-inline">
          <div class="form-group">
            <div class="col-md-8">
              <input class="form-control" [(ngModel)]="text" placeholder = "Name" />
            </div>
          </div>
          <div class="form-group">
            <div class="col-md-6">
              <input type="number" class="form-control" [(ngModel)]="price" placeholder="Price" />
            </div>
          </div>
          <div class="form-group">
            <div class="col-md-offset-2 col-md-8">
              <button class="btn btn-primary" (click)="addItem(text, price)">New</button>
            </div>
          </div>
        </div>
      </div>

      <table class="table table-striped">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Purchased</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let item of items">
            <td>{{item.purchase}}</td>
            <td>{{item.price}}</td>
            <td><input type="checkbox" [(ngModel)]="item.done" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>`
})

export class AppComponent {
  items: Item[] =
  [
    { purchase: "Bread", done: false, price: 15.9 },
    { purchase: "Butter", done: false, price: 60 },
    { purchase: "Cheese", done: false, price:310 },
    { purchase: "Beacon", done: false, price:210 }
  ];
  addItem(text: string, price: number): void {

    if(text==null || text==undefined || text.trim()=="")
      return;
    if(price==null || price==undefined)
      return;
    this.items.push(new Item(text, price));
  }
}
