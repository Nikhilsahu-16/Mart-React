import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";

function Veg()
{
    let dispatch = useDispatch();
    let vegItems = useSelector(state => state.products.veg);

    let finalItems = vegItems.map((item, index) => (
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
            <section id="veg-items">
                <h1 className="paint-order">
                    <span>Veg&nbsp;&nbsp;&nbsp; Items</span></h1>
                <span style={{ display: "flex" }}>{finalItems}</span>
            </section>
            <footer>
                <p>&copy; 2025 Food Delivery Service. All rights reserved.</p>
            </footer>
        </>
    )
}
export default Veg;