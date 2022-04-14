import React, { useEffect } from 'react';
import "./Login.css";
import GoogleLogin from 'react-google-login';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function Login() {
    // Uses OAuth only for the time being, leaving the page here for future purposes.
    const navigate = useNavigate(); 
    
    useEffect(() => {
        if(localStorage.getItem('user')) {
            alert('Already logged in');
            navigate('/search');
        }
    }, []);

    function googleSuccess(res) {
        const user = {
            profile: res.profileObj,
            token: res.tokenId
        };
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/search')
    }

    function googleFailure(err) {
        alert('There was a problem logging in')
        console.log(err);
    }

    return (
        <div id="login-container" className='text-center'>
            <h1> Login Page </h1>
            <GoogleLogin
                clientId="472602366911-rnitktrv3npb4252har9ch6cl6of0pim.apps.googleusercontent.com"
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy={'single_host_origin'}
                buttonText="Sign in with Google"
            />
        </div>
    );
}