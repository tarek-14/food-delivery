import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {assets} from '../../assets/assets'
const Navbar = () => {
  return (
    <div className='navbar d-flex justify-content-between align-items-center pt-2 px-5'>
      <img className ='logo col-3 col-md-1'src={assets.logo} alt="logo" />
      <img className ='profile' style={{width:"40px"}}src={assets.profile_image} alt="profile" />        
    </div>
  )
}

export default Navbar