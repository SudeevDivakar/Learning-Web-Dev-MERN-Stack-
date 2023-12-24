import { useState } from "react";
import ShoppingListForm from './ShoppingListForm';
import {v4 as uuid} from 'uuid';

export default function ShoppingList() {
    const [items, setItems] = useState([{id: uuid(), product: 'Bananas', qty: 8},
                                        {id: uuid(), product: 'Apples', qty: 5}]);
    function addItem(item){
        setItems((currItem) => {
            return [...currItem, {...item, id: uuid()}];
        });
    }
    return(
        <div>
            <h1>Shopping List</h1>
            <ul>
                {items.map((item) => {
                    return <li key={item.id}>{item.product} - {item.qty}</li>
                })}
            </ul>
            <ShoppingListForm addItem={addItem}/>
        </div>
    )
}