import React, { Component } from 'react'
import '../Service/Service.scss'
import { Link } from 'react-router-dom'
import InfoImg from '../../assets/img/info-img.png'
import MenuBar from '../MenuBar/MenuBar'
import { BiBell } from "react-icons/bi"
import { BiSearch } from "react-icons/bi"
import TableDevice from '../Device/TableDevice'
import { BiPlus, BiCalendar } from "react-icons/bi"

import DatePickerComponent from '../DatePicker/DatePicker'
import TableService from './TableService'



class Service extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (


            <div className='service-wrapper'>
                <MenuBar />
                <div className='service-container'>
                    <div className='header'>
                        <div className='header-title'>
                            <h4 className='header-title-name'>Dịch vụ</h4>
                            <span className='arrow1'>{">"}</span>
                            <h4 className='header-title-name'>Danh sách dịch vụ</h4>
                        </div>

                        <div className='header-item'>
                            <BiBell className='icon-service' />
                            <img src={InfoImg} className='service-img' />
                            <div className='title-name'>
                                <span>Xin chào<br /></span>
                                <span>Lê huỳnh ái vân</span>
                            </div>
                        </div>
                    </div>

                    <div className='body'>
                        <h4>Quản lý dịch vụ</h4>
                        <div className='service-status-list'>
                            <div className='service-status-active'>
                                <label>Trạng thái hoạt động</label>
                                <select className='service-select'>
                                    <option value="all">Tất cả</option>
                                    <option value="activate">Hoạt động</option>
                                    <option value="shut-down">Ngưng hoạt động</option>
                                </select>
                            </div>
                            <div className='service-status-connect'>
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

                            <div className='service-status-search'>
                                <label>Từ khóa</label>
                                <input type='text' className='service-select' />
                                <BiSearch className='icon-search' />
                            </div>
                        </div>
                        <div className='service-table'>
                            <TableService />
                        </div>

                        <div className='btn-add'>
                            <Link to="/addService" className='btn-add-link '>
                                <BiPlus className='btn-icon-add' />
                                <span>Thêm dịch vụ</span>

                            </Link>
                        </div>

                    </div>

                </div>
            </div>

        )

    }
}

export default Service