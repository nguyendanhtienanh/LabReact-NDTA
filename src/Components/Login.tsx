import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import logo from '../img/logo.jpg';
import {Input} from 'reactstrap';
import imguser from '../img/logo-user.png';
import imgpassword from '../img/logo-password.png';
import imginvisible from '../img/logo-invisible.png';
import {Button} from 'reactstrap';
import { Link } from "react-router-dom";

class Login extends Component {
    render() {
        return(
            <div className="Login">
                <div className="background">
                    <div className="logo">
                        <img src = {logo}/>
                    </div>
                    <div className="username">
                        <div>
                            <Input
                                placeholder="Tên đăng nhập"
                            />
                            <img src={imguser}></img>
                        </div>
                    </div>
                    <div className="password">
                        <div className="pass-logo">
                            <Input
                            type="password"
                            placeholder="Mật khẩu"
                            />
                            <img src={imgpassword}></img>
                        </div>
                        <img src={imginvisible}></img>
                    </div>
                    <div className="remember">
                            <Input
                                type="checkbox"
                                valid
                            />
                            <p>Lưu đăng nhập</p>
                    </div>
                    <div className="forget">
                        <p>Bạn quên mật khẩu?</p>
                    </div>
                    <div className="log">
                        <nav>
                            <Link to="/Home">
                                <Button>
                                    Đăng nhập
                                </Button>
                            </Link>
                        </nav>
                    </div>
                    <div className="info">
                        <p>Nếu bạn có thắc mắc hay cần giải đáp, vui lòng liên hệ số điện thoại: 19001000</p>
                    </div>
                    <div className="license">
                        <p>Bản quyền thuộc về AnyBim</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;