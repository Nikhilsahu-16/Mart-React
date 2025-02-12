import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import './Order.css'; // Import custom styles if needed

function Order()
{
    let order = useSelector((state) => state.order);
    let [orderItems, setOrderItems] = useState(order);

    // Flatten the order and item structure
    const flattenedOrderItems = order.flatMap((purchase) =>
        purchase.item.map((item) => ({
            ...item, // Spread item data
            date: purchase.date, // Add the purchase date to each item
        }))
    );

    // Update state when flattenedOrderItems changes
    useEffect(() =>
    {
        setOrderItems(flattenedOrderItems);
    }, [flattenedOrderItems]);

    return (
        <>
            <section id="order" className="container my-5">
                <h1 className="text-center mb-4">Purchase History</h1>
                {order.length === 0 ? (
                    <p>No Purchase history available.</p>
                ) : (

                        <div className="row g-3">
                            {orderItems.map((item, index) => (
                                <div
                                    className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
                                    key={item.date + index} // Unique key using item.date
                                >
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <img
                                                src={item.source}
                                                alt={item.name}
                                                className="img-fluid mb-2"
                                            />
                                            <p>{item.name} - &#8377;{item.price} x {item.quantity}</p>
                                            <p>Date: {item.date}</p>
                                            <p>
                                                Total: &#8377;{item.price * item.quantity}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                )}
            </section>
            <footer className="bg-dark text-white py-4 text-center">
                <p>&copy; 2025 Food Delivery Service. All rights reserved.</p>
            </footer>
        </>
    );
}

export default Order;
