import { useDispatch, useSelector } from "react-redux";
import { clearCart, completePurchase, decrement, increment, remove } from "./store";
import { useState } from "react";

function Cart()
{
    let dispatch = useDispatch();
    let cart = useSelector(state => state.cart);

    let cartItems = cart.map((item, index) =>
    (
        <div className="cart-items" key={index}>
            <div className="cart-item">
                <img src={item.source} alt={item.name} />
                <div className="item-details">
                    <h3>{item.name}</h3>
                    <p>{item.para}</p>
                    <p><strong>Price: &#8377;{item.price}</strong></p>
                </div>
                <div className="item-quantity">

                    <label htmlFor="quantity-veg-pizza">Quantity:</label>
                    <button className="btn-remove" onClick={() => dispatch(increment(item))}>+</button>
                    <input type="number" id="quantity-veg-pizza" value={item.quantity} />
                    <button className="btn-remove" onClick={() => dispatch(decrement(item))}>-</button>
                </div>
                <button className="btn-remove" onClick={() => dispatch(remove(item))}>Remove</button>
            </div>
        </div>
    ))

    let totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
    const [discount, setDiscount] = useState(0);
    const [showDiscount, setShowDiscount] = useState(false);
    const [showCouponDiscount, setShowCouponDiscount] = useState(false);
    let [couponCode, setCouponCode] = useState('');
    let [couponCodeDiscountPer, setCouponCodeDiscountPer] = useState(0);
    let discountPrice = (totalPrice * discount) / 100;
    let couponDiscountPrice = (totalPrice * couponCodeDiscountPer) / 100;
    let finalPrice = totalPrice - discountPrice - couponDiscountPrice;
    let handlingCouponPer = () =>
    {
        switch (couponCode.toUpperCase())
        {
            case "RATAN10": setCouponCodeDiscountPer(10); break;
            case "RATAN20": setCouponCodeDiscountPer(20); break;
            case "RATAN30": setCouponCodeDiscountPer(30); break;
            case "RATAN40": setCouponCodeDiscountPer(40); break;
            default: alert("Invalid Coupon Code.");
                setCouponCodeDiscountPer(0);
        }
    };


    let handlePurchaseDetails = () =>
    {
        const purchaseDate = new Date().toLocaleDateString();
        let purchaseDetails = {
            item: [...cart],
            price: totalPrice,
            date: purchaseDate
        };
        dispatch(completePurchase(purchaseDetails));
        dispatch(clearCart());
    }


    return (
        <>
            {cart.length > 0 ? (
                <div>
                    <section id="cart">
                        <h1 className="paint-order">
                            <span>Your&nbsp;&nbsp;&nbsp; Shopping&nbsp;&nbsp;&nbsp; Cart</span></h1>
                        <div>{cartItems}</div>
                        <div className="cart-items">
                            <div className="cart-item">
                                <div className="item-details">
                                    <p>Your Total Price : {totalPrice}</p>
                                    {showDiscount &&
                                        <div>
                                            <p>Your Discount Percentage : {discount}</p>
                                            <p>Your Discount Price : {discountPrice}</p>
                                        </div>}
                                    {showCouponDiscount &&
                                        <div>
                                            <p>Your Bill Coupon Applied : {couponCode}</p>
                                            <p>Your Coupon Discount Price : {couponDiscountPrice}</p>
                                        </div>}
                                    <p>Your Net Price : {finalPrice}</p>
                                    <button className="btn-remove" onClick={() => (setDiscount(10), setShowDiscount(true))}>Apply 10% discount</button>
                                    <button className="btn-remove" onClick={() => (setDiscount(20), setShowDiscount(true))}>Apply 20% discount</button>
                                    <button className="btn-remove" onClick={() => (setDiscount(30), setShowDiscount(true))}>Apply 30% discount</button>
                                </div>
                            </div>
                        </div>
                    </section >
                    <div className="coupon-container ">
                        <label htmlFor="coupon-code">Enter Coupon Code:</label>
                        <div className="coupon-input-wrapper">
                            <input type="text" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} id="coupon-code" placeholder="Enter code here" />
                            <button className="btn-remove" onClick={() => (handlingCouponPer(), setShowCouponDiscount(true))}>Apply</button>
                        </div>
                    </div><br />
                    <button className="btn-remove" style={{ backgroundColor: "green" }} onClick={handlePurchaseDetails}>Complete Purchase</button>
                    <footer>
                        <p>&copy; 2025 Food Delivery Service. All rights reserved.</p>
                    </footer>
                </div>
            ) : (
                <div>
                    <section id="cart">
                        <h1 className="paint-order" >
                            <span>Your&nbsp;&nbsp;&nbsp; Shopping&nbsp;&nbsp;&nbsp; Cart</span></h1>
                        <div>Your cart is empty</div>
                    </section >

                    <footer>
                        <p>&copy; 2025 Food Delivery Service. All rights reserved.</p>
                    </footer>
                </div>
            )}
        </>
    )
}
export default Cart;