import React, { useContext, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { StoreContext } from '../../context/StoreContext.jsx'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext)
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id]
        orderItems.push(itemInfo);
      }
    })
    
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    }
    let response = await axios.post(url + "/api/order/place", orderData, { headers: { token } })
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url)
    } else {
      alert("Error");
    }
  }

  const navigate = useNavigate();

  useEffect(()=>{
    if (!token) {
     navigate('/cart') 
    }
    else if(getTotalCartAmount() === 0){
      navigate('/cart')
    }
  },[token])
  return (
    <form onSubmit={placeOrder} className='place-order d-flex flex-column flex-md-row align-items-start justify-content-between my-5 gap-5'>
      <div className="place-order-left w-100">
        <p className="title fs-4 fw-medium mb-4">Delivery Information</p>
        <div className="multi-fields d-flex gap-2">
          <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First name' className='mb-3 w-100 p-2 rounded-1 'style={{border:"1px solid #c5c5c5", outlineColor: "tomato"}}/>
          <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last name' className='mb-3 w-100 p-2 rounded-1 'style={{border:"1px solid #c5c5c5", outlineColor: "tomato"}} />
        </div>
        <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email address' className='mb-3 w-100 p-2 rounded-1 'style={{border:"1px solid #c5c5c5", outlineColor: "tomato"}}/>
        <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' className='mb-3 w-100 p-2 rounded-1 'style={{border:"1px solid #c5c5c5", outlineColor: "tomato"}}/>
        <div className="multi-fields d-flex gap-2">
          <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City' className='mb-3 w-100 p-2 rounded-1 'style={{border:"1px solid #c5c5c5", outlineColor: "tomato"}}/>
          <input required name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State' className='mb-3 w-100 p-2 rounded-1 'style={{border:"1px solid #c5c5c5", outlineColor: "tomato"}}/>
        </div>
        <div className="multi-fields d-flex gap-2">
          <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zip code' className='mb-3 w-100 p-2 rounded-1 'style={{border:"1px solid #c5c5c5", outlineColor: "tomato"}}/>
          <input required name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country' className='mb-3 w-100 p-2 rounded-1 'style={{border:"1px solid #c5c5c5", outlineColor: "tomato"}}/>
        </div>
        <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone' className='mb-3 w-100 p-2 rounded-1 'style={{border:"1px solid #c5c5c5", outlineColor: "tomato"}}/>
      </div>
      <div className="place-order-right w-100">
        <div className="cart-total">
          <h2 className='fs-4 fw-medium mb-4'>Cart Total</h2>
          <div>
            <div className="cart-total-details d-flex justify-content-between">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details d-flex justify-content-between">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details d-flex justify-content-between">
              <b>Total </b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button type='submit'className="btn text-white mt-4 p-3 col-12 col-lg-8 " style={{background: "tomato"}}>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder //3:11:30