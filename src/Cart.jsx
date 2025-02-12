import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Cart.css';
import { clearCart, completePurchase, decrement, increment } from "./Store";

function Cart()
{
    let dispatch = useDispatch();
    let cart = useSelector(state => state.cart);

    let cartItems = cart.map((item, index) => (
        <div className="card mb-3 shadow-sm" key={index} style={{ maxWidth: '350px' }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={item.source} className="img-fluid rounded-start custom-img" alt={item.name} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text"><strong>Price: &#8377;{item.price}</strong></p>
                        <div className="d-flex align-items-center">
                            <label htmlFor="quantity-veg-pizza" className="me-2">Quantity:</label>
                            <button className="btn btn-primary btn-sm me-2" onClick={() => dispatch(increment(item))}>+</button>
                            <input type="number" id="quantity-veg-pizza" value={item.quantity} className="form-control w-auto" style={{ maxWidth: '60px', marginRight: '10px' }} />
                            <button className="btn btn-primary btn-sm me-2" onClick={() => dispatch(decrement(item))}>-</button>
                        </div>
                        <button className="btn btn-danger mt-2" onClick={() => dispatch(remove(item))}>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    ));

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
    };

    return (
        <>
            <div className="container mt-5">
                {cart.length > 0 ? (
                    <section id="cart">
                        <h1 className="text-center mb-4">Your Shopping Cart</h1>

                        {/* Card items container with gap */}
                        <div className="row g-3 justify-content-start">
                            {cartItems}
                        </div>

                        {/* Price and Discount Section */}
                        <div className="mt-4 w-50">
                            <div className="card">
                                <div className="card-body">
                                    {/* Left side: Total Price */}
                                    <h5 className="card-title">Total Price: &#8377;{totalPrice}</h5>

                                    {/* Discount Section */}
                                    {showDiscount && (
                                        <div>
                                            <p>Discount Percentage: {discount}%</p>
                                            <p>Discount Price: &#8377;{discountPrice}</p>
                                        </div>
                                    )}

                                    {/* Coupon Section */}
                                    {showCouponDiscount && (
                                        <div>
                                            <p>Coupon Applied: {couponCode}</p>
                                            <p>Coupon Discount Price: &#8377;{couponDiscountPrice}</p>
                                        </div>
                                    )}

                                    <p>Net Price: &#8377;{finalPrice}</p>

                                    {/* Discount Buttons */}
                                    <div className="d-flex justify-content-between gap-2 flex-wrap mt-3">
                                        <button className="btn btn-success" onClick={() => { setDiscount(10); setShowDiscount(true); }}>Apply 10% discount</button>
                                        <button className="btn btn-success" onClick={() => { setDiscount(20); setShowDiscount(true); }}>Apply 20% discount</button>
                                        <button className="btn btn-success" onClick={() => { setDiscount(30); setShowDiscount(true); }}>Apply 30% discount</button>
                                    </div>

                                    {/* Coupon Input */}
                                    <div className="d-flex justify-content-between align-items-center mt-4">
                                        <label htmlFor="coupon-code">Enter Coupon Code:</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} id="coupon-code" placeholder="Enter code here" />
                                            <button className="btn btn-primary" onClick={() => { handlingCouponPer(); setShowCouponDiscount(true); }}>Apply</button>
                                        </div>
                                    </div>

                                    {/* Complete Purchase Button */}
                                    <button className="btn btn-success w-100 mt-3" onClick={handlePurchaseDetails}>Complete Purchase</button>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : (
                    <section id="cart">
                        <h1>Your Shopping Cart</h1>
                        <div>Your cart is empty</div>
                    </section>
                )}

                <footer className="bg-dark text-white py-4 text-center">
                    <p>&copy; 2025 Food Delivery Service. All rights reserved.</p>
                </footer>
            </div>
        </>
    );
}

export default Cart;
