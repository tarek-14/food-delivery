import React, { useContext, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { Container, Spinner } from 'react-bootstrap';

const Verify = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const { url } = useContext(StoreContext);
    const navigate = useNavigate();
    const verifyPayment = async () => {
        try {
            const response = await axios.post(url+"/api/order/verify", {success, orderId });
            if (response.data.success) {
                navigate("/myorders");
            } else {
                navigate("/");
            }
        } catch (error) {
            console.error("Error verifying payment:", error);
            navigate("/");
        }
    };

    useEffect(() => {
        verifyPayment();
    }, []);
    const spinnerStyle = {
        width: '100px',
        height: '100px',
        border: '5px solid #bdbdbd',
        borderTopColor: 'tomato',
        borderRadius: '50%',
        animation: 'rotate 1s infinite',
    };
    const keyframes = `
        @keyframes rotate {
            100% {
                transform: rotate(360deg);
            }
        } `
    return (
        <>
            <style>{keyframes}</style>
            <Container fluid className='d-flex justify-content-center align-items-center' style={{minHeight: '60vh'}}>
                <Spinner animation="border"  role="status"  style={spinnerStyle}>
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Container>
        </>
    );
};

export default Verify;