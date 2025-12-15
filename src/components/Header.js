import AddToCart from "./AddToCart";

const Header =()=>
{
  return (
<header className="header">
    <div className="logo">MyShop</div>

    <nav className="nav">
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