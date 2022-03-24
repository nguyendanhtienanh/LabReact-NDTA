import React, { Component } from 'react';
import './Login.css';
import Logo from '../Img/logo.jpg';

class Login extends Component {
    render() {
        let url = Logo;
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-logo'>
                        <img src={url}/>
                    </div>
                    <div className='login-content'>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;