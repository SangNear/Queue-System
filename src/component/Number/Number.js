import React, { Component } from 'react'
import '../Number/Number.scss'
import { Link } from 'react-router-dom'
import InfoImg from '../../assets/img/info-img.png'
import MenuBar from '../MenuBar/MenuBar'
import { BiBell } from "react-icons/bi"
import { BiSearch } from "react-icons/bi"
import TableDevice from '../Device/TableDevice'
import { BiPlus, BiCalendar } from "react-icons/bi"

import DatePickerComponent from '../DatePicker/DatePicker'
import TableNumber from './TableNumber'
// import TableService from './TableService'



class Number extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (


            <div className='number-wrapper'>
                <MenuBar />
                <div className='number-container'>
                    <div className='header'>
                        <div className='header-title'>
                            <h4 className='header-title-name' style={{color: '#9998a1'}}>Cấp số</h4>
                            <span className='arrow1'>{">"}</span>
                            <h4 className='header-title-name'>Danh sách cấp số</h4>
                        </div>

                        <div className='header-item'>
                            <BiBell className='icon-number' />
                            <img src={InfoImg} className='number-img' />
                            <div className='title-name'>
                                <span>Xin chào<br /></span>
                                <span>Lê huỳnh ái vân</span>
                            </div>
                        </div>
                    </div>

                    <div className='body'>
                        <h4>Quản lý cấp số</h4>
                        <div className='number-status-list'>
                            <div className='number-name-service'>
                                <label>Tên dịch vụ</label>
                                <select className='number-select'>
                                    <option value="number-all">Tất cả</option>
                                    <option value="item-1">Khám sản - phụ khoa</option>
                                    <option value="item-2">Khám răng hàm mặt</option>
                                    <option value="item-3">Khám tai mũi họng</option>
                                </select>
                            </div>
                            
                            <div className='number-status-active'>
                                <label>Tình trạng</label>
                                <select className='number-select'>
                                    <option value="all">Tất cả</option>
                                    <option value="pending">Đang chờ</option>
                                    <option value="used">Đã sử dụng</option>
                                    <option value="skip">Bỏ qua</option>
                                </select>
                            </div>
                            <div className='number-provide'>
                                <label>Nguồn cấp</label>
                                <select className='number-select'>
                                    <option value="all">Tất cả</option>
                                    <option value="kioshock">Kioshock</option>
                                    <option value="system">Hệ thống</option>
                                    
                                </select>
                            </div>
                            <div className='number-status-connect'>
                                <label>Chọn thời gian</label>
                                <div className='datepicker-wrapper'>
                                    <DatePickerComponent className="datepicker-item">

                                    </DatePickerComponent>
                                    <BiCalendar className='icon-datepicker-1' />

                                    <span className='arrow1'>{">"}</span>

                                    <DatePickerComponent className="datepicker-item">

                                    </DatePickerComponent>
                                    <BiCalendar className='icon-datepicker-2' />

                                </div>

                            </div>

                            <div className='number-status-search'>
                                <label>Từ khóa</label>
                                <input type='text' className=' input-search' />
                                <BiSearch className='icon-search' />
                            </div>
                        </div>
                        <div className='number-table'>
                            <TableNumber/>
                        </div>

                        <div className='btn-add'>
                            <Link to="/addNumber" className='btn-add-link '>
                                <BiPlus className='btn-icon-add' />
                                <span>Cấp số mới</span>

                            </Link>
                        </div>

                    </div>

                </div>
            </div>

        )

    }
}

export default Number