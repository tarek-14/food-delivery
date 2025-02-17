import React, { useContext, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home")
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext)
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token")
    setToken("");
    navigate("/")
  }
  return (
    <div className='navbar d-flex justify-content-between align-items-center pt-3 pb-0' >
      <Link to='/'><img src={assets.logo} className='logo w-75  ' /></Link>
      <ul className="navbar-menu d-none d-lg-flex gap-3 fs-5 mt-2" style={{ color: '#49557e' }}>
        <Link to='/' onClick={() => setMenu('home')} >Home</Link>
        <a href='#explore-menu' onClick={() => setMenu('menu')} >Menu</a>
        <a href='#app-download' onClick={() => setMenu('mobile-app')} >Mobile App</a>
        <a href='#footer' onClick={() => setMenu('contact-us')} >Contact Us</a>
      </ul>
      <div className="navbar-right d-flex align-items-center justify-content-center gap-4">
        <div className=" position-relative">
          <Link to='/cart'><img src={assets.basket_icon} className='w-100' /></Link>
          <div className={getTotalCartAmount() ? 'dot position-absolute rounded-pill w-25 h-25' : ''} style={{ backgroundColor: 'tomato', top: '-8px', right: '-8px' }}></div>
        </div>
        {!token
          ?
          <button onClick={() => setShowLogin(true)} className='btn bg-transparent   rounded-pill py-2 px-4 fs-6 '
            style={{ transition: "0.3s", border: "1px solid tomato", color: '#49557e' }} >sing in</button>
          : <div className="navbar-profile">
            <a onClick={() => navigate('/myorders')}><img src={assets.bag_icon} alt="icon orders" className='me-3 ' /></a>
            <a onClick={logout}><img src={assets.logout_icon} alt="log out icon" /></a>
          </div>
        }
      </div>
    </div>
  )
}

export default Navbar;