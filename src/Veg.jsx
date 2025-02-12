import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import './Veg.css'; // Import the custom CSS file

function Veg()
{
    let dispatch = useDispatch();
    let vegItems = useSelector((state) => state.products.veg);

    let finalItems = vegItems.map((item, index) => (
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-2" key={index}> {/* 6 items per row */}
            <div className="card1 h-80 d-flex flex-column">
                <img
                    src={item.source}
                    className="card-img-top"
                    alt={item.name}
                />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">
                        <strong>Price: &#8377;{item.price}</strong>
                    </p>
                    <button
                        className="btn btn-primary btn-sm mt-auto"
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
            <section id="veg-items" className="container my-5">
                <h1 className="text-center mb-4">Veg Items</h1>
                <div className="row"> {/* Bootstrap gap utility to create space between columns */}
                    {finalItems}
                </div>
            </section>

            <footer className="bg-dark text-white py-4 text-center">
                <p>&copy; 2025 Food Delivery Service. All rights reserved.</p>
            </footer>
        </>
    );
}

export default Veg;
