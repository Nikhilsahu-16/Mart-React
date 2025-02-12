import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";

function Home()
{
    let dispatch = useDispatch();
    let featuredItems = useSelector(state => state.products.featured);
    let viewItems = useSelector(state => state.products.view);
    let featuredFinalItems = featuredItems.map((item, index) => (
        <div className="product-list" key={index}>
            <div className="product">
                <img src={item.source} alt="Veg Pizza" />
                <h3>{item.name}</h3>
                <p>{item.para}</p>
                <p>&#8377;{item.price}</p>
                <button className="btn-remove" onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
            </div>
        </div>
    )
    );
    let viewFinalItems = viewItems.map((item, index) => (
        <div className="category-list" key={index}>
            <div className="category">
                <img src={item.source} alt="Veg Items" /><br /><br />
                <a href={item.link} className="btn-remove">View Items</a>
            </div>
        </div>
    ));
    return (
        <>

            <section id="hero">
                <div className="hero-content">
                    <h1 className="paint-order">
                        <span>Welcome&nbsp;&nbsp;&nbsp; to&nbsp;&nbsp;&nbsp; Food &nbsp;&nbsp;&nbsp;Delivery</span></h1>
                    <p style={{ color: "black" }}>Delicious food delivered right to your door. Order now and enjoy!</p>
                    <a href="#categories" className="btn-remove">Order Now</a>
                </div>
            </section>
            <section id="categories">
                <h2>Browse by Categories</h2>
                <span style={{ display: "flex" }}>{viewFinalItems}</span>
            </section >
            <section id="featured-products">
                <h2>Featured Products</h2>
                <span style={{ display: "flex" }}>{featuredFinalItems}</span>
            </section >

            <section id="promo-banner">
                <div className="promo-content">
                    <h2>Special Offers</h2>
                    <p>Get 20% off on your first order! Use code: RATAN20</p>
                    <a href="veg-items.html" className="btn-remove">Order Now</a>
                </div>
            </section>

            <footer>
                <p>&copy; 2025 Food Delivery Service. All rights reserved.</p>
            </footer>
        </>
    )
}
export default Home;