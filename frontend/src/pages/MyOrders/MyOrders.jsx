import React, { useContext, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/assets'

const MyOrders = () => {

  const { url, token } = useContext(StoreContext)
  const [data, setData] = useState([])
  const fetchOrders = async () => {
    const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } });
    setData(response.data.data);
    // console.log(response.data.data);
  }

  useEffect(() => {
    if (token) {
      fetchOrders()
    }
  }, [token])

  return (
    <div className='my-orders mt-5'>
      <h2>My Orders</h2>
      <div className="d-flex flex-column mt-3 gap-4">
        {data.map((order, index) => {
          return (
            <div key={index} className="my-orders-order d-flex flex-column flex-md-row align-items-center gap-3 gap-md-4 fs-6 py-3 px-4 rounded"
              style={{ border: "1px solid tomato"}}>
              <img src={assets.parcel_icon} alt="box order" />
              <p  style={{ flex: 3 }} >
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ", ";
                  }
                })}
              </p>
              <p style={{ flex: 1 }}>${order.amount}</p>
              <p style={{ flex: 1 }}>Item: {order.items.length}</p>
              <p style={{ flex: 2 }}>
                <span style={{ color: "tomato" }}> &#x25cf; </span>
                <b className='fw-medium'>{order.status}</b>
              </p>
              <button onClick={fetchOrders} className='btn p-2 border-0 w-100' style={{ background: "#ffe1e1", color: "#454545", flex: 1 }}>
                Track Order
              </button>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default MyOrders