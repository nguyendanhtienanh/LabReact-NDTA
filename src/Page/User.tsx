import React from "react";
import '../Page/User.css';
import TopHome from "../Components/TopHome";
import Menu from "../Components/Menu";
import logouser from '../img/logo_user.png'; 
import { Table } from "reactstrap";
import iconcalendar from '../img/icon-calendar.png';
import iconmore from '../img/icon-more.png';

const User: React.FC = () => {
    return(
        <div className="User">
            <TopHome></TopHome>
            <div className="body-user">
                <Menu></Menu>
                <div className="content-user">
                    <div className="header-user" >
                        <p>My Profile</p>
                    </div>
                    <hr></hr>
                    <div className="info">
                        <div className="info-basic">
                            <div className="avatar-user">
                                <img src={logouser}></img>
                            </div>
                            <div className="basic">
                                <div className="name">
                                    MR. USER
                                </div>
                                <div className="email">
                                    Email: user@gmail.com
                                </div>
                            </div>
                        </div>
                        <div className="info-details">
                            <Table
                                borderless
                                className="table-details"
                            >
                                <tbody>
                                    <tr>
                                        <td>
                                            Date of birth:
                                        </td>
                                        <td className="calendar">
                                            01/01/2018
                                            <img src={iconcalendar}></img>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Sex:
                                        </td>
                                        <td className="more">
                                            Male
                                            <img src={iconmore}></img>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Address Company:
                                        </td>
                                        <td>
                                            15, Duy Tan, Dich Vong Hau, Cau Giay, Ha Noi
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Address Home:   
                                        </td>
                                        <td>
                                            15, Duy Tan, Dich Vong Hau, Cau Giay, Ha Noi
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;