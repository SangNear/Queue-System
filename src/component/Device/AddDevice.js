import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import InfoImg from '../../assets/img/info-img.png'
import MenuBar from '../MenuBar/MenuBar'
import { BiBell } from "react-icons/bi"
import { BiSearch } from "react-icons/bi"
import TableDevice from './TableDevice'
import FormDevice from './FormDevice'



class AddDevice extends Component {
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
                                <span className='arrow1'>{">"}</span>
                                <h4 className='header-title-name'>Thêm thiết bị</h4> 
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
                            <h4>Quản lý thiết bị</h4>

                            <div className='device-form'>
                                <FormDevice />
                            </div>

                            <div className='btn-add'>

                            </div>

                        </div>

                        <div className='footer'>
                            <Link to="#" className='btn-cancle-link'><button className='btn-cancle'>Hủy bỏ</button></Link>
                            <Link to="#" className='btn-add-link'><button className='btn-add'>Thêm thiết bị</button></Link>


                        </div>

                    </div>
                </div>
            </React.Fragment>
        )

    }
}

export default AddDevice