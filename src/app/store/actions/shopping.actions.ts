import { Action } from '@ngrx/store';
import { ShoppingItem } from '../models/shopping-item.model';

export enum ShoppingActionTypes {
    ADD_ITEM = '[SHOPPING] Add Item',
    // DELETE_ITEM = '[SHOPPING] Delete Item'
    // ADD_ITEM_SUCCESS = '[SHOPPING] ADD Item Success',
    // ADD_ITEM_FAILURE = '[SHOPPING] ADD Item Failure',
}

export class AddItemAction implements Action {
    readonly type = ShoppingActionTypes.ADD_ITEM;

    constructor(public payload: ShoppingItem) {}
}

// export class DeleteItemAction implements Action {
//     readonly type = ShoppingActionTypes.DELETE_ITEM;

//     constructor(public payload: string) {}
// }

export type ShoppingAction = AddItemAction ;
// | DeleteItemAction;
