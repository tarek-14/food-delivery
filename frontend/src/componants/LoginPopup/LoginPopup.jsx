import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import axios from "axios"
const LoginPopup = ({ setShowLogin }) => {
    const { url, setToken } = useContext(StoreContext)
    const [currState, setCurrState] = useState('Login')
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }));
    }
    // useEffect(() => {
    //   console.log(data);
    // }, [data])

    const onLogin = async (event) => {
        event.preventDefault()
        let newUrl = url;
        if (currState === 'Login') {
            newUrl += "/api/user/login"
        } else {
            newUrl += "/api/user/register"
        }

        const response = await axios.post(newUrl, data);
        if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token)
            setShowLogin(false)
        } else {
            alert(response.data.message)
        }
    }

    return (
        <div className='w-100 h-100 position-absolute z-1 d-grid' style={{ background: "#00000099" }}>
            <form onSubmit={onLogin} className=" text-secondary bg-white d-flex flex-column gap-3 p-4 fs-6 rounded-3"
                style={{ placeSelf: "center", width: " max(23vw , 330px)", animation: "fadeIn .5s" }}>
                <div className=" d-flex justify-content-between align-items-center text-dark">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} className='icon-close' style={{ cursor: "pointer" }} alt=" icon close" />
                </div>
                <div className="d-flex flex-column gap-3">
                    {currState === 'Login' ? <></>
                        : <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name' required className='p-2 rounded-1' style={{ outline: "none", border: "1px solid #c9c9c9" }} />}
                    <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' required className='p-2 rounded-1' style={{ outline: "none", border: "1px solid #c9c9c9" }} />
                    <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required className='p-2 rounded-1' style={{ outline: "none", border: "1px solid #c9c9c9" }} />
                </div>
                <button type='submit' className='p-2 rounded-1 border-0 text-white fs-5' style={{ background: "tomato", outline: "none", border: "1px solid #c9c9c9" }}>{currState !== 'Login' ? 'Create account' : 'Login'}</button>
                <div className="login-popup-condition d-flex align-items-start gap-2 m-0">
                    <input type="checkbox" className='mt-2' required />
                    <p>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
                {currState === 'Login'
                    ? <p>Create a new account? <span onClick={() => setCurrState('Sign Up')} style={{ color: "tomato", cursor: 'pointer' }}>Click here</span></p>
                    : <p>Already have an account? <span onClick={() => setCurrState('Login')} style={{ color: "tomato", cursor: 'pointer' }}>Login here</span></p>
                }
            </form>
        </div>
    )
}

export default LoginPopup