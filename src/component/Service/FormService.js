import React, { Component } from 'react'
import '../Service/FormService.scss'




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
                            <h4 className='form-h4'>Thông tin dịch vụ</h4>
                        </div>
                        <div className='col-6 mb-17'>
                            <label>Mã dịch vụ</label>
                            <input className='form-control' type='text'></input>
                        </div>
                        <div className='col-6 mb-17'>
                            <label>Mô tả</label>
                            <textarea className='form-control' placeholder='Mô tả dịch vụ'>

                            </textarea>

                        </div>

                        <div className='col-6 mb-17'>
                            <label>Tên dịch vụ</label>
                            <input className='form-control' type='text'></input>
                        </div>


                    </div>
                    <div className='row'>
                        <div className='col-12 mb-17'>
                            <h4 className='form-h4'>Quy tắc cấp số</h4>
                        </div>
                        <div className='col-12'>
                            
                            <div className='control-status'>
                                <input type="checkbox" className='checkbox-item' />
                                <label className='label-item'>Tăng tự động từ</label>
                                <span className='span-number'>001</span>
                                <span className='span-text'>đến</span>
                                <span className='span-number'>999</span>
                            </div>
                            <div className='control-status'>
                                <input type="checkbox" className='checkbox-item'/>
                                <label className='label-item'>Prefix</label>
                                <span className='span-number'>001</span>
                            </div>
                            <div className='control-status'>
                                <input type="checkbox"className='checkbox-item' />
                                <label className='label-item'>Surfix</label>
                                <span className='span-number'>001</span>
                            </div>
                            <div className='control-status'>
                                <input type="checkbox"className='checkbox-item' />
                                <label className='label-item'>Reset mỗi ngày</label>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )

    }
}

export default FormDevice