import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import InfoImg from '../../assets/img/info-img.png'
import MenuBar from '../MenuBar/MenuBar'
import { BiBell, BiCalendar } from "react-icons/bi"
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { BiSearch ,BiPlus} from "react-icons/bi"
import TableDevice from '../Device/TableDevice'
import FormService from '../Service/FormService'
import DatePickerComponent from '../DatePicker/DatePicker'
import TableDetail from './TableDetail'


class DetailService extends Component {
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
                            <span className='arrow1'>{">"}</span>
                            <h4 className='header-title-name'>Chi tiết</h4>
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
                        <div className='detail-service-container'>
                            <div className='row'>
                                <div className='device-info-container'>
                                    <div className='device-info'>
                                        <h4 className='device-info-title'>
                                            Thông tin dịch vụ
                                        </h4>
                                        <div className='device-info-item'>
                                            <label className='device-info-label'>Mã dịch vụ:</label>
                                            <span>201</span>
                                        </div>
                                        <div className='device-info-item'>
                                            <label className='device-info-label'>Tên dịch vụ:</label>
                                            <span>Khám tim mạch</span>
                                        </div>
                                        <div className='device-info-item'>
                                            <label className='device-info-label'>Mô tả:</label>
                                            <span>Chuyên các bệnh lý về tim</span>
                                        </div>






                                    </div>
                                    <div className='device-rule-container'>
                                        <h4 className='device-rule-title'>
                                            Quy tắc cấp số
                                        </h4>
                                        <div className='device-rule-number'>
                                            <label className='label-item'>Tăng tự động từ</label>
                                            <span className='span-number'>001</span>
                                            <span className='span-text'>đến</span>
                                            <span className='span-number'>999</span>
                                        </div>
                                        <div className='device-rule-number'>
                                            <label className='label-item'>Prefix</label>
                                            <span className='span-number'>001</span>
                                        </div>

                                        <div className='device-rule-number'>
                                            <label className='label-item'>Reset mỗi ngày</label>

                                        </div>

                                        <div className='device-rule-number'>
                                            <p>Ví dụ: 201-2001</p>

                                        </div>

                                    </div>
                                </div>
                                <div className='device-table-control'>
                                    <div className='device-status-container'>
                                        <div className='device-status-item'>
                                            <label>Trạng thái</label>
                                            <select className='service-select'>
                                                <option value="all">Tất cả</option>
                                                <option value="completed">Đã hoàn thành</option>
                                                <option value="worked">Đã thực hiện</option>
                                                <option value="missing">vắng</option>
                                            </select>
                                        </div>

                                        <div className='device-status-time'>
                                            <label>Chọn thời gian</label>
                                            <div className='device-date-picker'>
                                                <DatePickerComponent className="datepicker-item" />
                                                <BiCalendar className='icon-datepicker-1' />
                                                <span className='arrow1'>{">"}</span>
                                                <DatePickerComponent className="datepicker-item">

                                                </DatePickerComponent>
                                                <BiCalendar className='icon-datepicker-2    ' />
                                            </div>

                                        </div>

                                        <div className='device-status-search'>
                                            <label>Từ khóa</label>
                                            <input type='text' className='service-select' />
                                            <BiSearch className='icon-search' />
                                        </div>

                                    </div>

                                    <div className='device-status-table'>
                                        <TableDetail />
                                    </div>

                                    <div className='device-status-footer'>
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
                                </div>
                                <div className='btn-add'>
                                    <Link to="/updateService" className='btn-add-link '>
                                        <BiPlus className='btn-icon-add' />
                                        <span>Cập nhật dịch vụ</span>

                                    </Link>
                                </div>
                            </div>

                        </div>

                    </div>



                </div>
            </div>

        )

    }
}

export default DetailService