import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import InfoImg from '../../assets/img/info-img.png'
import MenuBar from '../MenuBar/MenuBar'
import { BiBell } from "react-icons/bi"


class DetailDevice extends Component {
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
                                <h4 className='header-title-name'>Chi tiết thiết bị</h4> 
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

                            <div className='device-detail'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-12 mb-17'>
                                            <h4 className='form-h4'>Thông tin thiết bị</h4>
                                        </div>
                                        <div className='col-6 mb-17'>
                                            <label>Mã thiết bị</label>
                                            <span>KIO_01</span>
                                        </div>
                                        <div className='col-6 mb-17'>
                                            <label>Loại thiết bị</label>
                                            <span>Kiosk</span>

                                        </div>
                                        <div className='col-6 mb-17'>
                                            <label>Tên thiết bị</label>
                                            <span>Kiosk</span>
                                        </div>
                                        <div className='col-6 mb-17'>
                                            <label>Tên đăng nhập</label>
                                            <span>Linhkyo011</span>

                                        </div>
                                        <div className='col-6 mb-17'>
                                            <label>Địa chỉ IP</label>
                                            <span>128.172.308</span>
                                        </div>
                                        <div className='col-6 mb-17'>
                                            <label>Mật khẩu</label>
                                            <span>CMS</span>
                                        </div>
                                        <div className='col-12 mb-17'>
                                            <label>Dịch vụ sử dụng</label>
                                            <br></br><br></br>
                                            <span>Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            

                        </div>

                        

                    </div>
                </div>

            </React.Fragment>
        )

    }
}

export default DetailDevice