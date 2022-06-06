import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Device/TableDevice.scss'




class TableService extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="table100">
                    <table>
                        <thead>
                            <tr className="table100-head">
                                <th className="column1">Mã dịch vụ</th>
                                <th className="column2">Tên dịch vụ</th>
                                <th className="column3">Mô tả</th>
                                <th className="column4">Trạng thái hoạt động</th>
                                
                                <th className="column7"></th>
                                <th className="column8"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="column1">KIO_01</td>
                                <td className="column2">Kiosk</td>
                                <td className="column3">Mô tả dịch vụ</td>
                                <td className="column4"><div className='red'></div>Ngưng hoạt động</td>
                                
                                <td className="column7"><Link to="/detailDevice">Chi tiết</Link></td>
                                <td className="column8"><Link to="/updateDevice">Cập nhật</Link></td>
                            </tr>
                            <tr>
                                <td className="column1">KIO_01</td>
                                <td className="column2">Kiosk</td>
                                <td className="column3">Mô tả dịch vụ</td>
                                <td className="column4"><div className='green'></div>Hoạt động</td>
                                
                                <td className="column7"><Link to="/detailDevice">Chi tiết</Link></td>
                                <td className="column8"><Link to="/updateDevice">Cập nhật</Link></td>
                            </tr>
                            <tr>
                                <td className="column1">KIO_01</td>
                                <td className="column2">Kiosk</td>
                                <td className="column3">Mô tả dịch vụ</td>
                                <td className="column4"><div className='green'></div>Hoạt động</td>
                                
                                <td className="column7"><Link to="/detailDevice">Chi tiết</Link></td>
                                <td className="column8"><Link to="/updateDevice">Cập nhật</Link></td>
                            </tr>
                            <tr>
                                <td className="column1">KIO_01</td>
                                <td className="column2">Kiosk</td>
                                <td className="column3">Mô tả dịch vụ</td>
                                <td className="column4"><div className='red'></div>Ngưng hoạt động</td>
                                
                                <td className="column7"><Link to="/detailDevice">Chi tiết</Link></td>
                                <td className="column8"><Link to="/updateDevice">Cập nhật</Link></td>
                            </tr>
                            <tr>
                                <td className="column1">KIO_01</td>
                                <td className="column2">Kiosk</td>
                                <td className="column3">Mô tả dịch vụ</td>
                                <td className="column4"><div className='green'></div>Hoạt động</td>
                                
                                <td className="column7"><Link to="/detailDevice">Chi tiết</Link></td>
                                <td className="column8"><Link to="/updateDevice">Cập nhật</Link></td>
                            </tr>
                            <tr>
                                <td className="column1">KIO_01</td>
                                <td className="column2">Kiosk</td>
                                <td className="column3">Mô tả dịch vụ</td>
                                <td className="column4"><div className='red'></div>Ngưng hoạt động</td>
                                
                                <td className="column7"><Link to="/detailDevice">Chi tiết</Link></td>
                                <td className="column8"><Link to="/updateDevice">Cập nhật</Link></td>
                            </tr>
                            <tr>
                                <td className="column1">KIO_01</td>
                                <td className="column2">Kiosk</td>
                                <td className="column3">Mô tả dịch vụ</td>
                                <td className="column4"><div className='green'></div>Hoạt động</td>
                                
                                <td className="column7"><Link to="/detailDevice">Chi tiết</Link></td>
                                <td className="column8"><Link to="/updateDevice">Cập nhật</Link></td>
                            </tr>
                            <tr>
                                <td className="column1">KIO_01</td>
                                <td className="column2">Kiosk</td>
                                <td className="column3">Mô tả dịch vụ</td>
                                <td className="column4"> <div className='red'></div>Ngưng hoạt động</td>
                                
                                <td className="column7"><Link to="/detailDevice">Chi tiết</Link></td>
                                <td className="column8"><Link to="/updateDevice">Cập nhật</Link></td>
                            </tr>

                            <tr>
                                
                                
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )

    }
}

export default TableService