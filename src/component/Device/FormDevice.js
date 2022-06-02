import React, { Component } from 'react'
import '../Device/FormDevice.scss'




class FormDevice extends Component {
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
                                <h4 className='form-h4'>Thông tin thiết bị</h4>
                            </div>
                            <div className='col-6 mb-17'>
                                <label>Mã thiết bị</label>
                                <input className='form-control' type='text'></input>
                            </div>
                            <div className='col-6 mb-17'>
                                <label>Loại thiết bị</label>
                                <select className='device-form-select'>
                                        <option value="kiosk">Kiosk</option>
                                        <option value="display-conter">Display conter</option>
                                        
                                    </select>
                                
                            </div>
                            <div className='col-6 mb-17'>
                                <label>Tên thiết bị</label>
                                <input className='form-control' type='text'></input>
                            </div>
                            <div className='col-6 mb-17'>
                                <label>Tên đăng nhập</label>
                                <input className='form-control' type='text'></input>
                            </div>
                            <div className='col-6 mb-17'>
                                <label>Địa chỉ IP</label>
                                <input className='form-control' type='text'></input>
                            </div>
                            <div className='col-6 mb-17'>
                                <label>Mật khẩu</label>
                                <input className='form-control' type='password'></input>
                            </div>
                            <div className='col-12 mb-17'>
                                <label>Dịch vụ sử dụng</label>
                                <input className='form-control' type='text'></input>
                            </div>
                        </div>
                    </div>
            </React.Fragment>
        )

    }
}

export default FormDevice