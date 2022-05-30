import React, { Component } from 'react'
import './MenuBar.scss'
import Logo from '../../assets/img/Logo alta.png'
import { Link } from 'react-router-dom'
import { BiGridAlt } from "react-icons/bi"
import { BiDevices } from "react-icons/bi"
import { BiCommentError } from "react-icons/bi"
import { BiLayer } from "react-icons/bi"
import { BiWrench } from "react-icons/bi"
import { BiTrendingUp } from "react-icons/bi"
import { BiLogOut } from "react-icons/bi"
class MenuBar extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <div className='menu-container'>
                    <div className='logo-menu'>
                        <img src={Logo} className='logo-img' />
                    </div>

                    <nav className='nav-bar'>
                        <ul className='nav-bar--list'>
                            <li className='nav-bar--item  '><Link to="/" className='nav-bar--item--link '><BiGridAlt className='icon-link'/>Dashboard</Link> </li>
                            <li className='nav-bar--item'><Link to="/device" className='nav-bar--item--link'><BiDevices className='icon-link'/>Thiết bị</Link></li>
                            <li className='nav-bar--item'><Link to="/service" className='nav-bar--item--link'><BiCommentError className='icon-link'/>Dịch vụ</Link></li>
                            <li className='nav-bar--item'><Link to="/number" className='nav-bar--item--link'><BiLayer className='icon-link'/>Cấp số</Link></li>
                            <li className='nav-bar--item'><Link to="report" className='nav-bar--item--link'><BiTrendingUp className='icon-link'/>Báo cáo</Link></li>
                            <li className='nav-bar--item'><Link to="setup" className='nav-bar--item--link'><BiWrench className='icon-link'/>Cài đặt hệ thống</Link></li>
                        </ul>
                    </nav>

                    <div className='log-out'>
                        <button className='btn-logout'><BiLogOut className='icon-btn'/>Đăng xuất</button>
                    </div>
                </div>
            </React.Fragment>
        )

    }
}

export default MenuBar