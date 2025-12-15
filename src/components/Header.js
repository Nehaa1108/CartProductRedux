import AddToCart from "./AddToCart";

const Header =()=>
{
  return (
<header class="header">
    <div class="logo">MyShop</div>

    <nav class="nav">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
    </nav>

   <AddToCart/>
</header>
  )
}
export default Header;