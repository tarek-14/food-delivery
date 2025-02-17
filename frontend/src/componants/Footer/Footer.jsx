import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer text-light bg-custom d-flex flex-column align-items-center gap-3 p-5 pt-80 'style={{background:" rgb(113, 128, 126)", marginTop:"150px"}} id='footer'>
            <div className="footer-content w-100 row d-flex flex-column flex-md-row  ">
                <div className="footer-content-left col-md-6 d-flex flex-column align-items-start gap-3">
                    <img src={assets.logo} />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolorum inventore saepe non repellendus dolore esse repellat ipsam commodi tempore praesentium necessitatibus, maiores fugit labore enim illum consequuntur nam. Alias?</p>
                    <div className="footer-social-icons mb-3 mb-md-0">
                        <img src={assets.facebook_icon} className="img-fluid me-3 " style={{ cursor: "pointer"}} />
                        <img src={assets.twitter_icon} className="img-fluid me-3 " style={{ cursor: "pointer"}}/>
                        <img src={assets.linkedin_icon} className="img-fluid me-3 " style={{ cursor: "pointer"}} />
                    </div>
                </div>
                <div className="footer-content-center col-md-3 d-flex flex-column align-items-start gap-3">
                    <h2 className='text-white'>COMPANY</h2>
                    <ul>
                        <li className="list-unstyled mb-2" style={{cursor: "pointer"}}>Home</li>
                        <li className="list-unstyled mb-2" style={{cursor: "pointer"}}>About us</li>
                        <li className="list-unstyled mb-2" style={{cursor: "pointer"}}>Delivery</li>
                        <li className="list-unstyled mb-2" style={{cursor: "pointer"}}>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right col-md-3 d-flex flex-column align-items-start gap-3">
                    <h2 className='text-white'>GET IN TOUCH</h2>
                    <ul>
                        <li className="list-unstyled mb-2" style={{cursor: "pointer"}}>+201000000000</li>
                        <li className="list-unstyled mb-2" style={{cursor: "pointer"}}>contect@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr className='w-100  my-4 bg-white' style={{height: "2px"}}/>
            <p className="text-center">Copyrigth 2025 &copy; Tarek Saad -  All Right Reserved. </p>
        </div>
    )
}

export default Footer