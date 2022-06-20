import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Role/TableRole.scss'




class TableRole extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className='table-role-container'>
                <div className="table100">
                    <table>
                        <thead>
                            <tr className="table100-head">
                                <th className="column1">Tên vai trò</th>
                                <th className="column2">Số người dùng</th>
                                <th className="column3">Mô tả</th>
                                <th className="column4"></th>
                                

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="column1">Kế toán</td>

                                <td className="column2">6</td>
                                <td className="column3">Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
                                <td className="column4"><Link to="/updateRole">Cập nhật</Link></td>
                                

                            </tr>
                            <tr>
                            <td className="column1">Kế toán</td>

                                <td className="column2">6</td>
                                <td className="column3">Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
                                <td className="column4"><Link to="/updateRole">Cập nhật</Link></td>
                               

                            </tr>
                            <tr>
                            <td className="column1">Kế toán</td>

                                <td className="column2">6</td>
                                <td className="column3">Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
                                <td className="column4"><Link to="/updateRole">Cập nhật</Link></td>
                                

                            </tr>
                            <tr>
                            <td className="column1">Kế toán</td>

                                <td className="column2">6</td>
                                <td className="column3">Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
                                <td className="column4"><Link to="/updateRole">Cập nhật</Link></td>
                               

                            </tr>
                            <tr>
                            <td className="column1">Kế toán</td>

                                <td className="column2">6</td>
                                <td className="column3">Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
                                <td className="column4"><Link to="/updateRole">Cập nhật</Link></td>
                                

                            </tr>
                            <tr>
                            <td className="column1">Kế toán</td>

                                <td className="column2">6</td>
                                <td className="column3">Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
                                <td className="column4"><Link to="/updateRole">Cập nhật</Link></td>
                                

                            </tr>
                            
                            

                            

                        </tbody>
                    </table>
                </div>
            </div>
        )

    }
}

export default TableRole