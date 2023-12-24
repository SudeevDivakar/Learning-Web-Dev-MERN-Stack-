import { useState } from "react";

export default function ShoppingListForm({addItem}){
    const [formData, setFormData] = useState({product:'', qty:0});
    function handleChange(evt){
        setFormData((currData) => {
            return{
                ...currData,
                [evt.target.name] : evt.target.value
            }
        })
    }
    function handleSubmit(evt){
        evt.preventDefault();
        addItem({product: formData.product, qty: formData.qty});
        setFormData({product:'', qty:0})
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="product">Product Name:</label>
            <input type="text" placeholder="Product Name" name="product" id="product" onChange={handleChange} value={formData.product}/>
            <label htmlFor="qty">Quantity:</label>
            <input type="number" placeholder="Quantity" name='qty' id="qty" onChange={handleChange} value={formData.qty}/>
            <button>Add Item</button>
        </form>
    )
}