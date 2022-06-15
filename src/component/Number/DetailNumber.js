import React, { Component } from 'react'
import '../Number/DetailNumber.scss'
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



class DetailNumber extends Component {
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
                            <h4 className='header-title-name' style={{color: '#9998a1'}}>Danh sách cấp số</h4>
                            <span className='arrow1'>{">"}</span>
                            <h4 className='header-title-name'>Chi tiết</h4>
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
                        <div className='detail-number-container'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <h4 className='detail-number-title'>Thông tin cấp số</h4>
                                    </div>
                                    <div className='col-6'>
                                        <label className='detail-number-label'>Họ tên</label>
                                        <span className='detail-number-span'>Nguyễn Thị Dung</span>
                                    </div>
                                    <div className='col-6'>
                                        <label className='detail-number-label'>Nguồn cấp</label>
                                        <span className='detail-number-span'>Kiosk</span>
                                    </div>
                                    <div className='col-6'>
                                        <label className='detail-number-label'>Tên dịch vụ</label>
                                        <span className='detail-number-span'>Khám tim mạch</span>
                                    </div>
                                    <div className='col-6'>
                                        <label className='detail-number-label'>Trạng thái</label>
                                        <span className='detail-number-span'>Đang chờ</span>
                                    </div>
                                    <div className='col-6'>
                                        <label className='detail-number-label'>Số thứ tự</label>
                                        <span className='detail-number-span'>2001001</span>
                                    </div>
                                    <div className='col-6'>
                                        <label className='detail-number-label'>Số điện thoại</label>
                                        <span className='detail-number-span'>0948523623</span>
                                    </div>
                                    <div className='col-6'>
                                        <label className='detail-number-label'>Thời gian cấp</label>
                                        <span className='detail-number-span'>14:35 - 07/01/2022</span>
                                    </div>
                                    <div className='col-6'>
                                        <label className='detail-number-label'>Địa chỉ Email</label>
                                        <span className='detail-number-span'>nguyendung@gmail.com</span>
                                    </div>
                                    <div className='col-6'>
                                        <label className='detail-number-label'>Hạn sử dụng</label>
                                        <span className='detail-number-span'>18:00 - 07/01/2022</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        )

    }
}

export default DetailNumber