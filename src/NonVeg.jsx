import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";

function NonVeg()
{
    let dispatch = useDispatch();
    let nonVegItems = useSelector(state => state.products.nonVeg);
    let finalItems = nonVegItems.map((item, index) => (
        <div className='container' key={index}>
            <div className='card'>
                <div className='image'>
                    <img href="#" src={item.source} />
                </div>
                <div className='content'>
                    <h2>{item.name}</h2>
                    <p>{item.para}</p>
                    <p><strong>Price: &#8377;{item.price}</strong></p>
                    <button className='btn-remove' onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
                </div>
            </div>
        </div>
    ));
    return (
        <>

            <section id="non-veg-items">
                <h1 className="paint-order">
                    <span>Non - Veg&nbsp;&nbsp;&nbsp;Items</span></h1>

                <span style={{ display: "flex", width: "100%" }}>{finalItems}</span>
            </section >
            <footer>
                <p>&copy; 2025 Food Delivery Service. All rights reserved.</p>
            </footer>
        </>
    )

}
export default NonVeg;