import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { assets } from '../../assets/assets';
const Header = () => {
  const headerPhoto ={
    height : "36vw",
    background: `url(${assets.headerImg}) `,
    backgroundRepeat:"noRepeat",
    backgroundSize: "cover" ,
  }
  const headerContent = {
    maxWidth: "60%",
    bottom: "10%",
    left: "6vw",
    animation: "fadeIn 2s"
  }
  const headerTitle ={
    fontSize:"max(6vw , 22px)"
  }
  return (
    <div className='header my-3 mx-auto position-relative rounded-4' style={headerPhoto}>
        <div className="header-contents position-absolute d-flex flex-column align-items-start gap-3 w-75 w-lg-50" style={headerContent}>
            <h2 className='text-white' style={headerTitle}>Order your favourit food here</h2>
            <p className='text-white text-white-50 d-none d-lg-flex'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam enim quisquam blanditiis laborum 
              ipsum animi illo alias maiores nihil quo ullam, aliquid amet adipisci commodi eligendi excepturi inventore deleniti consectetur.</p>
            <button className='btn rounded-pill bg-white px-3 py-2 text-secondary'>View Menu</button>
        </div>
    </div>
  )
}

export default Header