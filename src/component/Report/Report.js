import React, { Component } from 'react'
import '../Report/Report.scss'
import { Link } from 'react-router-dom'
import InfoImg from '../../assets/img/info-img.png'
import MenuBar from '../MenuBar/MenuBar'
import { BiBell } from "react-icons/bi"
import { BiSearch } from "react-icons/bi"
import TableDevice from '../Device/TableDevice'
import { BiPlus, BiCalendar } from "react-icons/bi"
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import DatePickerComponent from '../DatePicker/DatePicker'
import TableReport from './TableReport'

// import TableService from './TableService'



class Report extends Component {
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
                            <h4 className='header-title-name' style={{ color: '#9998a1' }}>Báo cáo</h4>
                            <span className='arrow1'>{">"}</span>
                            <h4 className='header-title-name'>Lập báo cáo</h4>
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

                        <div className='number-status-list'>

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


                        </div>
                        <div className='number-table'>
                            <TableReport />
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
                            <Link to="/addNumber" className='btn-add-link '>
                                <BiPlus className='btn-icon-add' />
                                <span>Tải về</span>

                            </Link>
                        </div>

                    </div>

                </div>
            </div>

        )

    }
}

export default Report