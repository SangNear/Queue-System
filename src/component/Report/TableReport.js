import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Report/TableReport.scss'




class TableReport extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className='table-report-container'>
                <div className="table100">
                    <table>
                        <thead>
                            <tr className="table100-head">
                                <th className="column1">Số thứ tự</th>
                                <th className="column2">Tên dịch vụ</th>
                                <th className="column3">Thời gian cấp</th>
                                <th className="column4">Tình trạng</th>
                                <th className="column5">Nguồn cấp</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="column1">20100001</td>

                                <td className="column2">Khám tim mạch</td>
                                <td className="column3">11:43 13/06/2022</td>
                                <td className="column4">Đang chờ</td>
                                <td className="column5">Kiosk</td>

                            </tr>
                            <tr>
                                <td className="column1">20100001</td>

                                <td className="column2">Khám tim mạch</td>
                                <td className="column3">11:43 13/06/2022</td>
                                <td className="column4">Đang chờ</td>
                                <td className="column5">Kiosk</td>

                            </tr>
                            <tr>
                                <td className="column1">20100001</td>

                                <td className="column2">Khám tim mạch</td>
                                <td className="column3">11:43 13/06/2022</td>
                                <td className="column4">Đang chờ</td>
                                <td className="column5">Kiosk</td>

                            </tr>
                            <tr>
                                <td className="column1">20100001</td>

                                <td className="column2">Khám tim mạch</td>
                                <td className="column3">11:43 13/06/2022</td>
                                <td className="column4">Đang chờ</td>
                                <td className="column5">Kiosk</td>

                            </tr>
                            <tr>
                                <td className="column1">20100001</td>

                                <td className="column2">Khám tim mạch</td>
                                <td className="column3">11:43 13/06/2022</td>
                                <td className="column4">Đang chờ</td>
                                <td className="column5">Kiosk</td>

                            </tr>
                            <tr>
                                <td className="column1">20100001</td>

                                <td className="column2">Khám tim mạch</td>
                                <td className="column3">11:43 13/06/2022</td>
                                <td className="column4">Đang chờ</td>
                                <td className="column5">Kiosk</td>

                            </tr>
                            <tr>
                                <td className="column1">20100001</td>

                                <td className="column2">Khám tim mạch</td>
                                <td className="column3">11:43 13/06/2022</td>
                                <td className="column4">Đang chờ</td>
                                <td className="column5">Kiosk</td>

                            </tr>
                            <tr>
                                <td className="column1">20100001</td>

                                <td className="column2">Khám tim mạch</td>
                                <td className="column3">11:43 13/06/2022</td>
                                <td className="column4">Đang chờ</td>
                                <td className="column5">Kiosk</td>

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

export default TableReport