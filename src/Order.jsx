import { useDispatch, useSelector } from "react-redux"

function Order()
{
    let dispatch = useDispatch();
    let order = useSelector(state => state.order);
    let orderItems = order.map((purchase, index) => (

        <div className="grid-container" key={index} >
            <div className="grid-item" style={{ display: "flex" }}>
                {purchase.item.map((item, itemIndex) => (
                    <div key={itemIndex} style={{ marginLeft: "10px" }}>
                        <img src={item.source} alt={item.name} />
                        <p>{item.name}-{item.price}x{item.quantity}</p>
                        <p>{purchase.date}</p>
                        <p>&#8377;{item.price * item.quantity}</p>
                    </div>
                ))}
            </div>
        </div>

    ));
    let Above = () =>
    {
        orderItems = order.filter(item.price > 200);
    }
    let Below = () =>
    {
        orderItems = order.filter(item.price < 200);
    }
    return (
        <>

            <section id="cart">
                <h1 className="paint-order">
                    <span>Purchase&nbsp;&nbsp;&nbsp; History</span></h1>
                {order.length === 0 ? (
                    <p>No Purchase history available.</p>
                ) : (

                    <div>
                        <div className="checkbox-wrapper-42">
                            <input id="cbx-42" type="checkbox" />
                            <label className="cbx" for="cbx-42"></label>
                            <label className="lbl" for="cbx-42" onClick={Above}>Above &#8377;200</label>
                        </div>
                        <div className="checkbox-wrapper-42">
                            <input id="cbx-41" type="checkbox" />
                            <label className="cbx" for="cbx-41"></label>
                            <label className="lbl" for="cbx-41" onClick={Below}>Below &#8377;200</label>
                        </div>
                        {orderItems}
                    </div>
                )
                }
            </section>
        </>
    )
}
export default Order;