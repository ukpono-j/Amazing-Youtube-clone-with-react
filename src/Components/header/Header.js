import React from 'react'
import "./Header.css"
import {AiOutlineMenu} from "react-icons/ai"
// import { FaBeer } from 'react-icons/fa';
import {AiOutlineSearch} from "react-icons/ai";
import {MdNotifications, MdApps } from 'react-icons/md'


const Header = ({handleToggleSidebar}) => {
    return (
        <div className=" header">
            <AiOutlineMenu className="header__menu" size={26}
              onClick={()=> handleToggleSidebar()}
            />
            {/* <FaBeer className="header__menu" size={26}/>  */}
            <img src="https://www.logo.wine/a/logo/YouTube/YouTube-Icon-Full-Color-Logo.wine.svg" alt="" className="header__logo"/>
            <form>
                <input type="text" placeholder="Search"/>
                <button type="submit">
                    <AiOutlineSearch size={22}/>

                </button>
            </form>
            <div className="header__icons">
             <MdNotifications  size={28}/>
             <MdApps size={28}/>
             <img src="https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png" alt=""avatar className="avatar"/>
            </div>
        </div>
    )
}

export default Header
