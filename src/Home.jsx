import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import './Home.css';

function Home()
{
    let dispatch = useDispatch();
    let featuredItems = useSelector((state) => state.products.featured);
    let viewItems = useSelector((state) => state.products.view);

    let featuredFinalItems = featuredItems.map((item, index) => (
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex justify-content-center" key={index}>
            <div className="card">
                <img src={item.source} className="card-img-top" alt={item.name} style={{ width: '80%', height: 'auto', margin: '0 auto' }} />
                <div className="card-body text-center">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.para}</p>
                    <p className="card-text">
                        <strong>Price: &#8377;{item.price}</strong>
                    </p>
                    <button className="btn btn-primary" onClick={() => dispatch(addToCart(item))}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    ));

    let viewFinalItems = (
        <div className="row justify-content-center">
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex justify-content-center">
                <div className="card">
                    <img src="https://th.bing.com/th/id/OIP.4wrRVc6j3A9vtrOafulXigHaFM?w=238&h=180&c=7&r=0&o=5&dpr=1.8&pid=1.7" className="card-img-top" alt="Veg Items" style={{ width: '80%', height: 'auto', margin: '0 auto' }} />
                    <div className="card-body text-center">
                        <h5 className="card-title">Veg Items</h5>
                        <p className="card-text">Explore a variety of delicious vegetarian dishes!</p>
                        <a href="/veg-items" className="btn btn-success mx-1">Veg Items</a>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex justify-content-center">
                <div className="card">
                    <img src="https://th.bing.com/th/id/OIP.uNdRK06-qX4KryObzmL7awHaEI?w=291&h=180&c=7&r=0&o=5&dpr=1.8&pid=1.7" className="card-img-top" alt="Non-Veg Items" style={{ width: '80%', height: 'auto', margin: '0 auto' }} />
                    <div className="card-body text-center">
                        <h5 className="card-title">Non-Veg Items</h5>
                        <p className="card-text">Savor the rich and flavorful non-vegetarian dishes!</p>
                        <a href="/non-veg-items" className="btn btn-danger mx-1">Non-Veg Items</a>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex justify-content-center">
                <div className="card">
                    <img src="https://th.bing.com/th/id/OIP.oneVHycUcxWXVLfTs-J8EgHaE3?w=296&h=194&c=7&r=0&o=5&dpr=1.8&pid=1.7" className="card-img-top" alt="Dessert Items" style={{ width: '80%', height: 'auto', margin: '0 auto' }} />
                    <div className="card-body text-center">
                        <h5 className="card-title">Dessert Items</h5>
                        <p className="card-text">Indulge in our sweet and delightful dessert options!</p>
                        <a href="/dessert" className="btn btn-warning mx-1">Dessert Items</a>
                    </div>
                </div>
            </div>
        </div>
    );



    return (
        <>
            <section id="hero" className="bg-primary text-white text-center py-5">
                <div className="container">
                    <h1>Welcome to Food Delivery</h1>
                    <p>Delicious food delivered right to your door. Order now and enjoy!</p>
                    <a href="#categories" className="btn btn-light">Order Now</a>
                </div>
            </section>

            <section id="categories" className="container my-5">
                <h2 className="text-center mb-4">Browse by Categories</h2>
                <div className="row justify-content-center">
                    {viewFinalItems}
                </div>
            </section>

            <section id="featured-products" className="container my-5">
                <h2 className="text-center mb-4">Featured Products</h2>
                <div className="row justify-content-center">
                    {featuredFinalItems}
                </div>
            </section>



            <footer className="bg-dark text-white py-4 text-center">
                <p>&copy; 2025 Food Delivery Service. All rights reserved.</p>
            </footer>
        </>
    );
}

export default Home;
