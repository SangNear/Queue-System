import React, { Component } from 'react'
import './Info.scss'
import { Link } from 'react-router-dom'
import infoImg from '../../assets/img/info-img.png'
import { BiBell } from "react-icons/bi"
import { BiCamera } from "react-icons/bi"

class Info extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <div className='info-container'>
                    <div className='header'>
                        <h4>Thông tin cá nhân</h4>

                        <div className='header-item'>
                            <BiBell className='icon-info' />
                            <img src={infoImg} className='info-img' />
                            <div className='title-name'>
                                <span>Xin chào<br /></span>
                                <span>Lê huỳnh ái vân</span>
                            </div>
                        </div>
                    </div>

                    <div className='user-infomation'>
                        <div className='avatar'>
                            <img src={infoImg} className='avatar-img' />
                            <BiCamera className='icon-avatar' />
                            <h3>Lê Quỳnh Ái Vân</h3>
                        </div>
                        <div className='form-infomation'>
                            <div class="row input-row">
                                <div class="col-6">
                                    <label className="label-input">Tên người dùng</label>
                                    <input type="text" class="form-control input-type" placeholder="First name" aria-label="First name"/>
                                </div>
                                <div class="col-6">
                                    <label className="label-input">Tên đăng nhập</label>
                                    <input type="text" class="form-control input-type" placeholder="First name" aria-label="First name"/>
                                </div>
                                <div class="col-6">
                                    <label className="label-input">Số điện thoại</label>
                                    <input type="text" class="form-control input-type" placeholder="First name" aria-label="First name"/>
                                </div>
                                <div class="col-6">
                                    <label className="label-input">Mật khẩu</label>
                                    <input type="text" class="form-control input-type" placeholder="First name" aria-label="First name"/>
                                </div>
                                <div class="col-6">
                                    <label className="label-input">Email</label>
                                    <input type="text" class="form-control input-type" placeholder="First name" aria-label="First name"/>
                                </div>
                                <div class="col-6">
                                    <label className="label-input">Vai trò</label>
                                    <input type="text" class="form-control input-type" placeholder="First name" aria-label="First name"/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )

    }
}

export default Info