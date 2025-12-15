const Product = ()=>
{
  return (
    <div class="product-container">

   
    <div class="product-image">
        <img src="https://www.theaudiostore.in/cdn/shop/files/sony-wh-ch720n-noise-canceling-wireless-headphones-black-43220896874751.webp?v=1744396394&width=1000" alt="Product"/>
    </div>

  
    <div class="product-info">
        <h1>Wireless Headphones</h1>
        <p class="price">₹2,999</p>

        <p class="description">
            High-quality wireless headphones with noise cancellation,
            long battery life, and premium sound.
        </p>

      
        <div class="rating">
            ⭐⭐⭐⭐☆ <span>(120 Reviews)</span>
        </div>

      
        <div class="quantity">
            <label>Quantity:</label>
            <input type="number"  min="0"/>
        </div>

      
        <div class="actions">
            <button class="add-cart">Add to Cart</button>
            <button class="buy-now">Buy Now</button>
        </div>
    </div>

</div>

  )
}
export default Product;