import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { assets } from '../../assets/assets';

const AppDownload = () => {
  return (
    <div className='container text-center my-5' id='app-download'>
        <p className='fs-3 fw-medium'>For Better Experience Download <br /> Tomato App</p>
        <div className="d-flex justify-content-center gap-3 mt-4">
            <img src={assets.play_store} alt="Play Store" className='img-fluid' style={{ width: '150px', cursor: 'pointer' }} />
            <img src={assets.app_store} alt="App Store" className='img-fluid' style={{ width: '150px', cursor: 'pointer' }} />
        </div>
    </div>
  )
}

export default AppDownload;