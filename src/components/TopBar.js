import React from "react";
import logo from "../assets/images/logo.svg";

import { LogoutOutlined } from '@ant-design/icons';

function TopBar(props) {
    const {isLoggedIn, handleLogout} = props;
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <span className="App-tittle">InsLite</span>
            {
                isLoggedIn ?
                    <LogoutOutlined className='logout' onclick={handleLogout}/>
                    :
                    null
            }
        </header>
    )
}

export default TopBar;