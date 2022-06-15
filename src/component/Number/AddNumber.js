import React, { Component } from 'react'
import '../Number/AddNumber.scss'
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



class AddNumber extends Component {
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
                            <h4 className='header-title-name'>Cấp số mới</h4>
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
                        <div className='add-number-container'>
                            <div className='add-number-item'>
                                <h4 className='add-number-title'>Câp số mới</h4>
                                <label className='add-number-label'>Dịch vụ khách hàng lựa chọn</label>
                                <select className='add-number-select' >
                                    <option value="" disabled selected>Chọn dịch vụ</option>
                                    <option value="1">Khám tim mạch</option>
                                    <option value="2">Khám sản - phụ khoa</option>
                                    <option value="3">Khám răng hàm mặt</option>
                                    <option value="4">Khám tai mũi họng</option>
                                </select>
                                <div className='btn-control'>
                                    <Link to="#" className='btn-cancle-link'><button className='btn-cancle'>Hủy bỏ</button></Link>
                                    <Link to="#" className='btn-submit-link'><button className='btn-submit'>In</button></Link>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        )

    }
}

export default AddNumber