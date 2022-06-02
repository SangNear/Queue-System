import React, { Component } from 'react'
import '../Device/Device.scss'
import { Link } from 'react-router-dom'
import InfoImg from '../../assets/img/info-img.png'
import MenuBar from '../MenuBar/MenuBar'
import { BiBell } from "react-icons/bi"
import { BiSearch } from "react-icons/bi"
import TableDevice from './TableDevice'



class Device extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>

                <div className='device-wrapper'>
                    <MenuBar />
                    <div className='device-container'>
                        <div className='header'>
                            <div className='header-title'>
                                <h4 className='header-title-name'>Thiết bị</h4>
                                <span className='arrow1'>{">"}</span>
                                <h4 className='header-title-name'>Danh sách thiết bị</h4> 
                            </div>

                            <div className='header-item'>
                                <BiBell className='icon-device' />
                                <img src={InfoImg} className='device-img' />
                                <div className='title-name'>
                                    <span>Xin chào<br /></span>
                                    <span>Lê huỳnh ái vân</span>
                                </div>
                            </div>
                        </div>

                        <div className='body'>
                            <h4>Danh sách thiết bị</h4>
                            <div className='device-status-list'>
                                <div className='device-status-active'>
                                    <label>Trạng thái hoạt động</label>
                                    <select className='device-select'>
                                        <option value="all">Tất cả</option>
                                        <option value="activate">Hoạt động</option>
                                        <option value="shut-down">Ngưng hoạt động</option>
                                    </select>
                                </div>
                                <div className='device-status-connect'>
                                    <label>Trạng thái kết nối</label>
                                    <select className='device-select'>
                                        <option value="all">Tất cả</option>
                                        <option value="connected">Kết nối</option>
                                        <option value="disconected">Ngắt kết nối</option>
                                    </select>
                                </div>

                                <div className='device-status-search'>
                                    <label>Từ khóa</label>
                                    <input type='text' className='device-select' />
                                    <BiSearch className='icon-search' />
                                </div>
                            </div>
                            <div className='device-table'>
                                <TableDevice />
                            </div>

                            <div className='btn-add'>
                                <Link to="#" className='btn-add-link '></Link>
                            </div>

                        </div>

                    </div>
                </div>
            </React.Fragment>
        )

    }
}

export default Device