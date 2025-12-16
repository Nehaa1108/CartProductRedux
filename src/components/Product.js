import { useDispatch } from "react-redux";

import { addItem, removeItem } from "../Service/Slice";

const Product = ()=>
{

  const dispatch = useDispatch()
  return (
    <div className="product-container">

   
    <div className="product-image">
        <img src="https://www.theaudiostore.in/cdn/shop/files/sony-wh-ch720n-noise-canceling-wireless-headphones-black-43220896874751.webp?v=1744396394&width=1000" alt="Product"/>
    </div>

  
    <div className="product-info">
        <h1>Wireless Headphones</h1>
        <p className="price">₹2,999</p>

        <p className="description">
            High-quality wireless headphones with noise cancellation,
            long battery life, and premium sound.
        </p>

      
        <div className="rating">
            ⭐⭐⭐⭐☆ <span>(120 Reviews)</span>
        </div>

      
        <div className="quantity">
            <label>Quantity:</label>
            <input type="number"  />
        </div>

      
        <div className="actions">
            <button onClick={()=>dispatch(addItem(1))} className="add-cart">Add to Cart</button>
            <button onClick={()=>dispatch(removeItem(1))} className="remove-cart">Remove to Cart</button>
            <button className="buy-now">Buy Now</button>
        </div>
    </div>

</div>

  )
}
export default Product;