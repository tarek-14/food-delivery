import { React, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
  const { cartItems, food_list, removeFromCart , getTotalCartAmount , url} = useContext(StoreContext)
  const navigate = useNavigate()
  return (
    <div className='cart my-5'>
      <div className="cart-items">
        <div className="d-grid align-items-center text-secondary" style={{gridTemplateColumns: "1fr 1.5fr 1fr 1fr 1fr .5fr",fontSize: "max(1vw,12px)"}}>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <>
                <div className=' d-grid align-items-center' style={{gridTemplateColumns: "1fr 1.5fr 1fr 1fr 1fr .5fr",fontSize: "max(1vw,12px)"}}>
                  <img src={url+"/images/"+item.image} className='col-8 col-md-6 col-lg-3'/>
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cross text-danger'style={{cursor:"pointer"}}>x</p>
                </div>
                <hr />
              </>
            )
          }
        })}
        <div className=' d-flex  flex-column-reverse flex-md-row justify-content-between my-5  'style={{gap: "max(12vw , 20px)"}}>
          <div className="cart-total d-flex flex-column flex-grow-1 gap-3">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details d-flex justify-content-between text-secondary">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr className='my-2'/>
              <div className="cart-total-details d-flex justify-content-between text-secondary">
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>
              <hr  className='my-2'/>
              <div className="cart-total-details d-flex justify-content-between ">
                <b>Total</b>
                <b>${getTotalCartAmount()=== 0 ? 0 : getTotalCartAmount()+2}</b>
              </div>
            </div>
            <button onClick={()=>navigate('/order')} className="btn text-white p-3 col-12 col-lg-8 " style={{background: "tomato"}}>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cart-promocode flex-grow-1 justify-content-md-between justify-content-start">
            <div>
              <p className='text-secondary'>If you have a promo code, Enter it here</p>
              <div className=" d-flex justify-content-between align-items-center mt-2 rounded "style={{background: "#eaeaea"}}>
                <input type="text" className='form-control bg-transparent border-0 shadow-none ps-2' placeholder='promo code' />
                <button className='btn text-white bg-dark py-2 px-4'>Supmit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart