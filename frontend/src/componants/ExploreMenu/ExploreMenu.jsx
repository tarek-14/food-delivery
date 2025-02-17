import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { menu_list } from '../../assets/assets';
const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='explore-menu container-fluid p-4 ' id='explore-menu'>
            <h1 className='text-dark fw-medium'>Explore our menu</h1>
            <p className='explore-menu-text text-black-50'>
                Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time. </p>
            <div className="explore-menu-list d-flex gap-3 overflow-auto justify-content-between align-items-center mt-3 ">
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={() => { setCategory(prev => prev === item.menu_name ? 'All' : item.menu_name) }}
                            key={index} className="explore-menu-list-item text-center">
                            <img src={item.menu_image} alt={item.menu_name} className={`rounded-circle ${category === item.menu_name ? 'active' : ''}`}
                                style={{
                                    width: '7.5vw', minWidth: '80px', cursor: 'pointer', transition: '.2s',
                                    border: category === item.menu_name ? '4px solid tomato' : 'none', padding: category === item.menu_name ? '2px' : '0'
                                }} />
                            <p className=' mt-1' style={{ cursor: "pointer", fontSize: 'max(1.4vw, 16px)',color: category === item.menu_name ?"tomato":"gray" }}>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default ExploreMenu;