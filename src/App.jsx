import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
import NonVeg from "./NonVeg";
import Cart from "./Cart";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Veg from "./Veg";
import Home from "./Home";
import Dessert from "./Dessert";
import Order from "./Order";
import Error from "./Error";
import Login from "./Login";
import { useSelector } from "react-redux";

function App()
{
  const cart = useSelector(state => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  let { isAuthenticated, user } = useSelector(state => state.auth);



  return (
    <>

      <BrowserRouter>
        <header className="bg-dark text-white p-3">
          <div className="container-fluid">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <h4 className="me-3 text-white">Food Delivery Service</h4>
                {isAuthenticated && <span className="text-white">Welcome, {user}</span>}
              </div>
              <div className="d-flex align-items-center">
                {isAuthenticated ? (
                  <button
                    className="btn btn-danger me-3"
                  >
                    Logout
                  </button>
                ) : (
                  <Link to="/Login" className="btn btn-primary me-3">
                    Login
                  </Link>
                )}
                <ul className="nav">
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/veg-items">Veg Items</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/non-veg-items">Non-Veg Items</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/dessert">Dessert Items</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/about-us">About Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/contact-us">Contact Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/orders">Orders</Link>
                  </li>
                  <li className="nav-item">
                    <div className="d-flex align-items-center">
                      <Link className="nav-link text-white" to="/cart">
                        Cart
                        <span className="badge bg-danger ms-1">{totalItems}</span>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>

        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<Home />} />
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
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
