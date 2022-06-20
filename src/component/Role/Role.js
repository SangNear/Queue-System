import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MenuBar from '../MenuBar/MenuBar'
import { BiBell } from "react-icons/bi"
import { BiSearch } from "react-icons/bi"
import TableRole from './TableRole'
import { BiPlus } from "react-icons/bi"
import '../Role/Role.scss'

import InfoImg from '../../assets/img/info-img.png'


class Role extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            
            <div className='role-wrapper'>
            <MenuBar />
            <div className='role-container'>
                <div className='header'>
                    <div className='header-title'>
                        <h4 className='header-title-name' style={{ color: '#9998a1' }}>Cài đặt hệ thống</h4>
                        <span className='arrow1'>{">"}</span>
                        <h4 className='header-title-name' >Quản lý vai trò</h4>
                    </div>

                    <div className='header-item'>
                        <BiBell className='icon-role' />
                        <img src={InfoImg} className='role-img' />
                        <div className='title-name'>
                            <span>Xin chào<br /></span>
                            <span>Lê huỳnh ái vân</span>
                        </div>
                    </div>
                </div>

                <div className='body'>
                    <h4>Danh sách vai trò</h4>
                    <div className='role-status-list'>
                        

                        <div className='role-status-search'>
                            <label>Từ khóa</label>
                            <input type='text' className='role-select' />
                            <BiSearch className='icon-search' />
                        </div>
                    </div>
                    <div className='role-table'>
                        <TableRole />
                    </div>

                    <div className='btn-add'>
                        <Link to="/addRole" className='btn-add-link '>
                            <BiPlus className='btn-icon-add' />
                            <span>Thêm vai trò</span>

                        </Link>
                    </div>

                </div>

            </div>
        </div>  
            
        )

    }
}

export default Role