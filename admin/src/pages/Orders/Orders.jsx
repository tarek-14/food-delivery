import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect} from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
import { assets } from '../../assets/assets';

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);
  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data)
      console.log(response.data.data);
    } else {
      toast.error("Error")
    }
  }
  const statusHandler = async (event, orderId) => {
    // console.log(event, orderId);
    const response = await axios.post(url + "/api/order/status", {
      orderId,
      status: event.target.value
    })
    if (response.data.success) {
      await fetchAllOrders();
    }
  }

  useEffect(() => {
    fetchAllOrders()
  }, [])
  return (
    <div className='order text-secondary mt-4  m-auto w-75'>
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className="order-item row fs-6 my-4 p-3  align-items-start " style={{ border: "1px solid tomato" }}>
            <img src={assets.parcel_icon} alt="box order" className='d-none d-md-flex col-md-1' />
            <div className='col-md-5 flex-grow-1'>
              <p className='order-item-food fw-semibold'>
                {order.items.map((item, index) => (
                  <span key={index}>
                    {item.name} x {item.quantity}
                    {index !== order.items.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>
              <hr className='p-0 m-0' style={{outline:"none" }}/>
              <div className='d-flex align-items-center  gap-4 mt-4 mb-1'>
                <p className='order-item-name fw-semibold '>{order.address.firstName + " " + order.address.lastName}</p>
                <p className='order-item-phone'>{order.address.phone}</p>
              </div>
              <hr className='p-0 m-0' style={{outline:"none" }}/>
              <p >{order.address.street + ", " + order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode}</p>
            </div>
            <p className='col-md-2'>Items : {order.items.length}</p>
            <div className='col-12 col-md-4  d-flex row  justify-content-between  '>
              <p className='col-4 co-md-12'>${order.amount}</p>
              <select onChange={(event) => statusHandler(event, order._id)} value={order.status}
                className="col-8 col-md-12  btn  text-dark  p-2 rounded-1 mb-0" style={{ minWidth: "180px", width: "max(10vw, 120px)", border: "1px solid tomato", background: "#ffe8e4" }}>
                <option value="Food Processing">Food Processing</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders