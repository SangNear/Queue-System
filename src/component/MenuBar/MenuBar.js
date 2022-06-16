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
            active: false
        }
    }

    toggleClass = () => {
        console.log("log");
    };

    render() {
        return (
            <React.Fragment>
                <div className='menu-container'>
                    <div className='logo-menu'>
                        <img src={Logo} className='logo-img' />
                    </div>

                    <nav className='nav-bar'>
                        <ul className='nav-bar--list'>
                            {/* <li className='nav-bar--item active  '><Link to="/" className='nav-bar--item--link '><BiGridAlt className='icon-link'/>Dashboard</Link> </li> */}
                            <li className={this.state.active ? 'nav-bar--item active-dashboard' : 'nav-bar--item'} onClick={this.toggleClass}><Link to="/" className='nav-bar--item--link ' ><BiGridAlt className='icon-link' />Dashboard</Link> </li>
                            <li className={this.state.active ? 'nav-bar--item active-device' : 'nav-bar--item'} onClick={this.toggleClass}><Link to="/device" className='nav-bar--item--link'><BiDevices className='icon-link' />Thiết bị</Link></li>
                            <li className={this.state.active ? 'nav-bar--item active-service' : 'nav-bar--item'} onClick={this.toggleClass}><Link to="/service" className='nav-bar--item--link'><BiCommentError className='icon-link' />Dịch vụ</Link></li>
                            <li className={this.state.active ? 'nav-bar--item active-number' : 'nav-bar--item'} onClick={this.toggleClass}><Link to="/number" className='nav-bar--item--link'><BiLayer className='icon-link' />Cấp số</Link></li>
                            <li className={this.state.active ? 'nav-bar--item active' : 'nav-bar--item'} onClick={this.toggleClass}><Link to="/report" className='nav-bar--item--link'><BiTrendingUp className='icon-link' />Báo cáo</Link></li>

                            <li className={this.state.active ? 'nav-bar--item active' : 'nav-bar--item'} onClick={this.toggleClass}>
                                <Link to="/setup" className='nav-bar--item--link'><BiWrench className='icon-link' />
                                    Cài đặt hệ thống
                                    <div className='nav-bar-drop-item invisible'>

                                        <Link to="/qlvt" className='nav-bar--drop-item-link'>
                                            Quản lý vai trò
                                        </Link>
                                        <Link to="/qltk" className='nav-bar--drop-item-link'>
                                            Quản lý tài khoản
                                        </Link>

                                        <Link to="/nknd" className='nav-bar--drop-item-link'>
                                            Nhật ký người dùng
                                        </Link>

                                    </div>
                                </Link>

                            </li>
                        </ul>

                    </nav>

                    <div className='log-out'>
                        <button className='btn-logout'><BiLogOut className='icon-btn' />Đăng xuất</button>
                    </div>
                </div>
            </React.Fragment>
        )

    }
}

export default MenuBar