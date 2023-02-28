import { ShoppingAction, ShoppingActionTypes } from "../actions/shopping.actions";
import { ShoppingItem } from "../models/shopping-item.model";

const initialState: Array<ShoppingItem> = [
    {
        id: '17',
        name: 'Deit Coke',
    },
    // {
    //     id: '177',
    //     name: 'Fanta',
    // },
];

export function ShoppingReducer(state: Array<ShoppingItem> = initialState, action: ShoppingAction) {
    switch (action.type) {
        case ShoppingActionTypes.ADD_ITEM:
            return [...state, action.payload];
        // case ShoppingActionTypes.DELETE_ITEM:
        //     return state.filter(item => item.id !== action.payload);
        default:
            return state;
    }
}




// export interface ShoppingListState{
//     ingredients: Ingredient[];
// }

// const initialState: ShoppingListState = {
//     ingredients: [
//         new Ingredient('Apples', 5),
//         new Ingredient("Tomatoes", 4),
//     ]
// };
// export function shoppingListReducer(state: ShoppingListState = initialState, 
//     action: shoppingListActions.AddIngredient): ShoppingListState {
//     switch(action.type){