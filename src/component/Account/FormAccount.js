import React, { Component } from 'react'
import '../Account/FormAccount.scss'




class FormAccount extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 mb-17'>
                                <h4 className='form-h4'>Thông tin tài khoản</h4>
                            </div>
                            <div className='col-6 mb-17'>
                                <label>Họ tên</label>
                                <input className='form-control' type='text'></input>
                            </div>
                            <div className='col-6 mb-17'>
                                <label>Tên đăng nhập</label>
                                <input className='form-control' type='text'></input>
                                
                            </div>
                            <div className='col-6 mb-17'>
                                <label>Số điện thoại</label>
                                <input className='form-control' type='text'></input>
                            </div>
                            <div className='col-6 mb-17'>
                                <label>Mật khẩu</label>
                                <input className='form-control' type='password'></input>
                            </div>
                            <div className='col-6 mb-17'>
                                <label>Email</label>
                                <input className='form-control' type='text'></input>
                            </div>
                            <div className='col-6 mb-17'>
                                <label>Nhập lại mật khẩu</label>
                                <input className='form-control' type='text'></input>
                            </div>
                            <div className='col-6 mb-17'>
                                <label>Vai trò</label>
                                <select className='form-control'>
                                    <option value="all">Tất cả</option>
                                    <option value="kt">Kế toán</option>
                                    <option value="manage">Quản lý</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>
                            <div className='col-6 mb-17'>
                                <label>Tình trạng</label>
                                <input className='form-control' type='text'></input>
                            </div>
                        </div>
                    </div>
            </React.Fragment>
        )

    }
}

export default FormAccount