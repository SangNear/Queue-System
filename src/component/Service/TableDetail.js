import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Service/TableService.scss'




class TableDetail extends Component {
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
                                <th className="column1">Số thứ tự</th>
                                <th className="column2">Trạng thái</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="column1">2010001</td>
                                <td className="column2">Đã hoàn thành</td>
                                
                            </tr>
                            <tr>
                                <td className="column1">2010001</td>
                                <td className="column2">Đang thực hiện</td>
                                
                            </tr>
                            <tr>
                                <td className="column1">2010001</td>
                                <td className="column2">Vắng</td>
                                
                            </tr>
                            <tr>
                                <td className="column1">2010001</td>
                                <td className="column2">Vắng</td>
                                
                            </tr>
                            <tr>
                                <td className="column1">2010001</td>
                                <td className="column2">Đang thực hiện</td>
                                
                            </tr>
                            <tr>
                                <td className="column1">2010001</td>
                                <td className="column2">Đã hoàn thành</td>
                                
                            </tr>
                            <tr>
                                <td className="column1">2010001</td>
                                <td className="column2">Đã hoàn thành</td>
                                
                            </tr>

                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )

    }
}

export default TableDetail