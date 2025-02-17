import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({id , name , price , description , image  }) => {

  const{ cartItems,addToCart,removeFromCart,url} = useContext(StoreContext)
  return (
    <div className='w-100 mx-auto rounded-3 shadow transition-all animate__animated animate__fadeIn '>
        <div className=" position-relative">
            <img className=' w-100 rounded-top-4' src={url+"/images/"+image} />
            { !cartItems[id] 
              ? <img  onClick={()=> addToCart(id)} src={assets.add_icon_white}
                  className='add position-absolute rounded-circle' style={{width:"40px" ,cursor: "pointer" , bottom:"15px" , right:"15px"}}/>
              : <div className='food-item-counter position-absolute d-flex align-items-center gap-2 p-1 rounded-5 bg-white' style={{bottom:"15px", right:"15px"}}>
                <img className='w-50' onClick={()=> removeFromCart(id)} src={assets.remove_icon_red}/>
                <p className='m-0'>{cartItems[id]}</p>
                <img className='w-50' onClick={()=> addToCart(id)} src={assets.add_icon_green} />
              </div>
            }
        </div>
        <div className="food-item-info p-2">
            <div className="d-flex justify-content-between align-items-center ">
                <p className='fs-5 fw-medium'>{name}</p>
                <img className='w-25' src={assets.rating_starts} />
            </div>
            <p className="text-black-50 " style={{fontSize:"13px"}}>{description}</p>
            <p className="fs-3 fw-medium " style={{color:"tomato"}}>${price}</p>
        </div>
    </div>
  )
}

export default FoodItem