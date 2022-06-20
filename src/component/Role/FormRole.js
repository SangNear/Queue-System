import React, { Component } from 'react'
import '../Role/FormRole.scss'




class FormRole extends Component {
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
                            <h4 className='form-h4'>Thông tin vai trò</h4>
                        </div>
                        <div className='content-left col-6'>
                            <label>Tên vai trò</label>
                            <input className='form-control' type='text' placeholder='Nhập tên vai trò'></input>

                            <label>Mô tả</label>
                            <textarea className='form-control' placeholder='Nhập mô tả' rows="8"></textarea>
                        </div>
                        <div className='content-right col-6'>
                            <label>Phân quyền chức năng</label>
                            <div className='group-function'>
                                <div className='function-a'>
                                    <label className='title-a'>Nhóm chức năng A</label>
                                    <div className='group'>
                                        <div className='group-item'>
                                            <input type="checkbox" className='checkbox'  /> <span>Tất cả</span>
                                        </div>
                                        <div className='group-item'>
                                            <input type="checkbox" className='checkbox' /> <span>Chức năng x</span>
                                        </div>
                                        <div className='group-item'>
                                            <input type="checkbox" className='checkbox' /> <span>Chức năng y</span>
                                        </div>
                                        <div className='group-item'>
                                            <input type="checkbox" className='checkbox' /> <span>Chức năng z</span>
                                        </div>
                                    </div>

                                </div>

                                <div className='function-b'>
                                    <label className='title-b'>Nhóm chức năng A</label>
                                    <div className='group'>
                                        <div className='group-item'>
                                            <input type="checkbox" className='checkbox'  /> <span>Tất cả</span>
                                        </div>
                                        <div className='group-item'>
                                            <input type="checkbox" className='checkbox' /> <span>Chức năng x</span>
                                        </div>
                                        <div className='group-item'>
                                            <input type="checkbox" className='checkbox' /> <span>Chức năng y</span>
                                        </div>
                                        <div className='group-item'>
                                            <input type="checkbox" className='checkbox' /> <span>Chức năng z</span>
                                        </div>
                                    </div>

                                </div>
                                <div className='function-b'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )

    }
}

export default FormRole