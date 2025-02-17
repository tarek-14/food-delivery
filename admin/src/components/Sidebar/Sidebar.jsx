import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { assets } from '../../assets/assets';

const Sidebar = () => {
  return (
    <div className='d-flex flex-column border-end  vh-100 ps-3 ' style={{ width: '15%' }}>
      <div className='d-flex flex-column gap-3 '>

        <NavLink to='./add' className='d-flex align-items-center gap-2 p-2 rounded-start '
          style={({ isActive }) => ({ border: isActive ? '1px solid tomato' : '1px solid #a9a9a9',
            backgroundColor: isActive ? '#fff0ed' : 'transparent', color: isActive ? 'tomato' : 'black' })}>
          <img src={assets.add_icon} alt='Add' />
          <p className='d-none d-md-block mb-0'>Add Items</p>
        </NavLink>

        <NavLink to='./list' className='d-flex align-items-center gap-2 p-2 rounded-start '
          style={({ isActive }) => ({ border: isActive ? '1px solid tomato' : '1px solid #a9a9a9',
            backgroundColor: isActive ? '#fff0ed' : 'transparent', color: isActive ? 'tomato' : 'black'})}>
          <img src={assets.order_icon} alt='List' />
          <p className='d-none d-md-block mb-0'>List Items</p>
        </NavLink>
        
        <NavLink to='./orders' className='d-flex align-items-center gap-2 p-2 rounded-start '
          style={({ isActive }) => ({ border: isActive ? '1px solid tomato' : '1px solid #a9a9a9',
            backgroundColor: isActive ? '#fff0ed' : 'transparent', color: isActive ? 'tomato' : 'black'})}>
          <img src={assets.order_icon} alt='Orders' />
          <p className='d-none d-md-block mb-0'>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
