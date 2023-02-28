import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { AddItemAction, ShoppingAction } from './store/actions/shopping.actions';
import { AppState } from './store/models/app-state.model';
import { ShoppingItem } from './store/models/shopping-item.model';
import { ShoppingReducer } from './store/reducers/shopping.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ngrx-shopping-list';
  name = ShoppingReducer;
  id = ShoppingReducer;


  shoppingItems$ : Observable<Array<ShoppingItem>> | any; 

  // newShoppingItem: ShoppingItem = { id: '', name: '' }; 

  constructor(private store: Store<AppState>) {}
   
  ngOnInit(): void {
   this.shoppingItems$ = this.store.select(store => store.shopping);
    // this.shoppingItems$ = Store.newItems.map((shopping) => Object.assign({}, this.shoppingItems$))

    // setTimeout(() => this.addItem(), 2000);
  }

  // addItem() {
  //   this.newShoppingItem.id = uuid();

  //   this.store.dispatch(new AddItemAction(this.newShoppingItem));
    
  //   this.newShoppingItem = { id: '', name: '' };
  // }

  // deleteItem(id: string) {
  //   this.store.dispatch(new DeleteItemAction(id));
  // }
}
