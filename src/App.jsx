import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import NonVeg from "./NonVeg";
import Cart from "./Cart";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Veg from "./Veg";
import Home from "./Home";
import "./App.css"
import { useDispatch, useSelector } from "react-redux";
import Dessert from "./Dessert";
import Order from "./Order";
import Error from "./error";
import Login from "./Login";
import { logout } from "./store";

function App()
{
  const cart = useSelector(state => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  let { isAuthenticated, user } = useSelector(state => state.auth);
  let dispatch = useDispatch();
  return (
    <>
      <BrowserRouter>
        <header>
          {isAuthenticated ? (
            <div>
              <button className="btn-remove" onClick={() => dispatch(logout())}>Logout</button>
            </div>) : (
            <div>
              <Link to="/Login" className="btn-remove">Login</Link>
            </div>
          )}
          <ul className="menu-bar">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/veg-items">Veg Items</Link></li>
            <li><Link to="/non-veg-items">Non-Veg Items</Link></li>
            <li><Link to="/dessert">Dessert Items</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><Link to="/orders">Orders</Link></li>
            <li><span className="noticeBox">
              <Link to="/cart"> <span>Cart</span>
                <span className="bubbleCount">{totalItems}</span>
              </Link>
            </span>
            </li>
          </ul>

        </header>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/veg-items" element={<Veg />} />
          <Route path="/non-veg-items" element={<NonVeg />} />
          <Route path="/dessert" element={<Dessert />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/orders" element={<Order />} />
          <Route path="*" element={<Error />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;