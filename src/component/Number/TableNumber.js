import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Number/TableNumber.scss'




class TableNumber extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className='table-number-container'>
                <div className="table100">
                    <table>
                        <thead>
                            <tr className="table100-head">
                                <th className="column1">STT</th>
                                <th className="column2">Tên khách hàng</th>
                                <th className="column3">Tên dịch vụ</th>
                                <th className="column4">Thời gian cấp</th>
                                <th className="column5">Hạn sử dụng</th>
                                <th className="column6">Trạng thái</th>

                                <th className="column7">Nguồn cấp</th>
                                <th className="column8"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="column1">20100001</td>
                                <td className="column2">Lê Huỳnh Ái Vân</td>
                                <td className="column3">Khám tim mạch</td>
                                <td className="column4">11:43 13/06/2022</td>
                                <td className="column5">11:43 13/06/2022</td>
                                <td className="column6">Đang chờ</td>
                                <td className="column7">Nguồn cấp</td>
                                <td className="column8"><Link to="/detailNumber">Chi tiết</Link></td>

                            </tr>
                            <tr>
                                <td className="column1">20100001</td>
                                <td className="column2">Lê Huỳnh Ái Vân</td>
                                <td className="column3">Khám tim mạch</td>
                                <td className="column4">11:43 13/06/2022</td>
                                <td className="column5">11:43 13/06/2022</td>
                                <td className="column6">Đang chờ</td>
                                <td className="column7">Nguồn cấp</td>
                                <td className="column8"><Link to="/detailNumber">Chi tiết</Link></td>
                                
                            </tr>
                            <tr>
                                <td className="column1">20100001</td>
                                <td className="column2">Lê Huỳnh Ái Vân</td>
                                <td className="column3">Khám tim mạch</td>
                                <td className="column4">11:43 13/06/2022</td>
                                <td className="column5">11:43 13/06/2022</td>
                                <td className="column6">Đang chờ</td>
                                <td className="column7">Nguồn cấp</td>
                                <td className="column8"><Link to="/detailNumber">Chi tiết</Link></td>
                                
                            </tr>
                            <tr>
                                <td className="column1">20100001</td>
                                <td className="column2">Lê Huỳnh Ái Vân</td>
                                <td className="column3">Khám tim mạch</td>
                                <td className="column4">11:43 13/06/2022</td>
                                <td className="column5">11:43 13/06/2022</td>
                                <td className="column6">Đang chờ</td>
                                <td className="column7">Nguồn cấp</td>
                                <td className="column8"><Link to="/detailNumber">Chi tiết</Link></td>
                                
                            </tr>
                            <tr>
                                <td className="column1">20100001</td>
                                <td className="column2">Lê Huỳnh Ái Vân</td>
                                <td className="column3">Khám tim mạch</td>
                                <td className="column4">11:43 13/06/2022</td>
                                <td className="column5">11:43 13/06/2022</td>
                                <td className="column6">Đang chờ</td>
                                <td className="column7">Nguồn cấp</td>
                                <td className="column8"><Link to="/detailNumber">Chi tiết</Link></td>
                                
                            </tr>
                            <tr>
                                <td className="column1">20100001</td>
                                <td className="column2">Lê Huỳnh Ái Vân</td>
                                <td className="column3">Khám tim mạch</td>
                                <td className="column4">11:43 13/06/2022</td>
                                <td className="column5">11:43 13/06/2022</td>
                                <td className="column6">Đang chờ</td>
                                <td className="column7">Nguồn cấp</td>
                                <td className="column8"><Link to="/detailNumber">Chi tiết</Link></td>
                                
                            </tr>
                            <tr>
                                <td className="column1">20100001</td>
                                <td className="column2">Lê Huỳnh Ái Vân</td>
                                <td className="column3">Khám tim mạch</td>
                                <td className="column4">11:43 13/06/2022</td>
                                <td className="column5">11:43 13/06/2022</td>
                                <td className="column6">Đang chờ</td>
                                <td className="column7">Nguồn cấp</td>
                                <td className="column8"><Link to="/detailNumber">Chi tiết</Link></td>
                                
                            </tr>
                            <tr>
                                <td className="column1">20100001</td>
                                <td className="column2">Lê Huỳnh Ái Vân</td>
                                <td className="column3">Khám tim mạch</td>
                                <td className="column4">11:43 13/06/2022</td>
                                <td className="column5">11:43 13/06/2022</td>
                                <td className="column6">Đang chờ</td>
                                <td className="column7">Nguồn cấp</td>
                                <td className="column8"><Link to="/detailNumber">Chi tiết</Link></td>
                                
                            </tr>

                            <tr>


                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        )

    }
}

export default TableNumber