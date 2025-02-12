import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import './Dessert.css';

function NonVeg()
{
    let dispatch = useDispatch();
    let nonVegItems = useSelector((state) => state.products.dessert);

    let finalItems = nonVegItems.map((item, index) => (
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-2" key={index}> {/* 6 items per row */}
            <div className="card1 h-80 d-flex flex-column">
                {/* Card Image */}
                <img
                    src={item.source}
                    className="card-img-top"
                    alt={item.name}
                    style={{ objectFit: 'cover', height: '200px', width: '100%' }}
                />
                {/* Card Body */}
                <div className="card-body d-flex flex-column justify-content-between">
                    <div className="card-info">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">
                            <strong>Price: &#8377;{item.price}</strong>
                        </p>
                    </div>
                    {/* Add to Cart Button */}
                    <button
                        className="btn btn-primary mt-auto"
                        onClick={() => dispatch(addToCart(item))}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    ));

    return (
        <>
            <section id="non-veg-items" className="container my-5">
                <h1 className="text-center mb-4">Non-Veg Items</h1>
                <div className="row g-3"> {/* g-3 is Bootstrap's spacing between grid items */}
                    {finalItems}
                </div>
            </section>

            <footer className="bg-dark text-white py-4 text-center">
                <p>&copy; 2025 Food Delivery Service. All rights reserved.</p>
            </footer>
        </>
    );
}

export default NonVeg;
