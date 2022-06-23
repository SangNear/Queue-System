import React, { Component } from 'react'
import '../Account/Account.scss'
import { Link } from 'react-router-dom'
import InfoImg from '../../assets/img/info-img.png'
import { BiBell } from "react-icons/bi"
import MenuBar from '../MenuBar/MenuBar'
import OverView from '../OverView/OverView'
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi"
import TableAccount from './TableAccount'
import { BiPlus } from "react-icons/bi"

class Account extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className='account-wrapper'>
                <MenuBar />
                <div className='account-container'>
                    <div className='header'>
                        <div className='header-title'>
                            <h4 className='header-title-name' style={{ color: '#9998a1' }}>Cài đặt hệ thống</h4>
                            <span className='arrow1'>{">"}</span>
                            <h4 className='header-title-name' >Quản lý vai trò</h4>
                        </div>

                        <div className='header-item'>
                            <BiBell className='icon-account' />
                            <img src={InfoImg} className='account-img' />
                            <div className='title-name'>
                                <span>Xin chào<br /></span>
                                <span>Lê huỳnh ái vân</span>
                            </div>
                        </div>
                    </div>

                    <div className='body'>
                        <h4>Danh sách tài khoản</h4>
                        <div className='account-status-list'>
                            <div className='account-status-select'>
                                <label>Tên vai trò</label>
                                <select className='account-select'>
                                    <option value="all">Tất cả</option>
                                    <option value="1">Ngưng hoạt động</option>
                                    <option value="2">Hoạt động</option>
                                    
                                </select>
                            </div>

                            <div className='account-status-search'>
                                <label>Từ khóa</label>
                                <input type='text' className='account-input' />
                                <BiSearch className='icon-search' />
                            </div>
                        </div>
                        <div className='account-table'>
                            <TableAccount />
                        </div>
                        <div className='report-footer'>
                            <BsFillCaretLeftFill />
                            <span className="active_page">1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                            <span>5</span>
                            <span>...</span>
                            <span>10</span>
                            <BsFillCaretRightFill />
                        </div>

                        <div className='btn-add'>
                            <Link to="/addAccount" className='btn-add-link '>
                                <BiPlus className='btn-icon-add' />
                                <span>Thêm tài khoản</span>

                            </Link>
                        </div>

                    </div>

                </div>
            </div>
        )

    }
}

export default Account