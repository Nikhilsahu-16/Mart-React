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

    // Filtering functions
    const Above = () =>
    {
        setOrderItems(flattenedOrderItems.filter((item) => item.price > 200));
    };

    const Below = () =>
    {
        setOrderItems(flattenedOrderItems.filter((item) => item.price < 200));
    };

    console.log("Flattened Order Items:", orderItems); // Log the order items to check data

    return (
        <>
            <section id="order" className="container my-5">
                <h1 className="text-center mb-4">Purchase History</h1>
                {order.length === 0 ? (
                    <p>No Purchase history available.</p>
                ) : (
                    <div>
                        {/* Filter checkboxes */}
                        <div className="d-flex justify-content-start mb-4">
                            <div className="form-check me-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="cbx-42"
                                    onClick={Above}
                                />
                                <label className="form-check-label" htmlFor="cbx-42">
                                    Above &#8377;200
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="cbx-41"
                                    onClick={Below}
                                />
                                <label className="form-check-label" htmlFor="cbx-41">
                                    Below &#8377;200
                                </label>
                            </div>
                        </div>

                        {/* Cards container using Bootstrap grid */}
                        <div className="row g-3">
                            {orderItems.map((item, index) => (
                                <div
                                    className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
                                    key={item.date + index} // Unique key using item.date
                                >
                                    <div className="card h-100">
                                        <div className="card-body">
                                            {/* Debugging: Check the item data */}
                                            {console.log(item)}
                                            {/* Ensure the item has `source`, `name`, `price`, and `quantity` */}
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
