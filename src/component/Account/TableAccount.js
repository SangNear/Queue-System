import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './TableAccount.scss'




class TableAccount extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className='table-account-container'>
                <div className="table100">
                    <table>
                        <thead>
                            <tr className="table100-head">
                                <th className="column1">Tên đăng nhập</th>
                                <th className="column2">Họ tên</th>
                                <th className="column3">Số điện thoại</th>
                                <th className="column4">Email</th>
                                <th className="column5">Vai trò</th>
                                <th className="column6">Trạng thái hoạt động</th>
                                <th className="column7"></th>


                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="column1">tuyetnguyen@19</td>

                                <td className="column2">Nguyễn Văn A</td>
                                <td className="column3">0919898273</td>
                                <td className="column2">tuyetnguyen@gmail.com</td>
                                <td className="column2">Kế toán</td>
                                <td className="column2">Ngưng hoạt động</td>
                                <td className="column4"><Link to="/updateAccount">Cập nhật</Link></td>


                            </tr>
                            <tr>
                                <td className="column1">tuyetnguyen@19</td>

                                <td className="column2">Nguyễn Văn A</td>
                                <td className="column3">0919898273</td>
                                <td className="column2">tuyetnguyen@gmail.com</td>
                                <td className="column2">Kế toán</td>
                                <td className="column2">Hoạt động</td>
                                <td className="column4"><Link to="/updateAccount">Cập nhật</Link></td>


                            </tr>
                            <tr>
                                <td className="column1">tuyetnguyen@19</td>

                                <td className="column2">Nguyễn Văn A</td>
                                <td className="column3">0919898273</td>
                                <td className="column2">tuyetnguyen@gmail.com</td>
                                <td className="column2">Kế toán</td>
                                <td className="column2">Ngưng hoạt động</td>
                                <td className="column4"><Link to="/updateAccount">Cập nhật</Link></td>


                            </tr>
                            <tr>
                                <td className="column1">tuyetnguyen@19</td>

                                <td className="column2">Nguyễn Văn A</td>
                                <td className="column3">0919898273</td>
                                <td className="column2">tuyetnguyen@gmail.com</td>
                                <td className="column2">Kế toán</td>
                                <td className="column2">Hoạt động</td>
                                <td className="column4"><Link to="/updateAccount">Cập nhật</Link></td>


                            </tr>
                            <tr>
                                <td className="column1">tuyetnguyen@19</td>

                                <td className="column2">Nguyễn Văn A</td>
                                <td className="column3">0919898273</td>
                                <td className="column2">tuyetnguyen@gmail.com</td>
                                <td className="column2">Kế toán</td>
                                <td className="column2">Ngưng hoạt động</td>
                                <td className="column4"><Link to="/updateAccount">Cập nhật</Link></td>


                            </tr>
                            <tr>
                                <td className="column1">tuyetnguyen@19</td>

                                <td className="column2">Nguyễn Văn A</td>
                                <td className="column3">0919898273</td>
                                <td className="column2">tuyetnguyen@gmail.com</td>
                                <td className="column2">Kế toán</td>
                                <td className="column2">Ngưng hoạt động</td>
                                <td className="column4"><Link to="/updateAccount">Cập nhật</Link></td>


                            </tr>
                            
                            <tr>
                                <td className="column1">tuyetnguyen@19</td>

                                <td className="column2">Nguyễn Văn A</td>
                                <td className="column3">0919898273</td>
                                <td className="column2">tuyetnguyen@gmail.com</td>
                                <td className="column2">Kế toán</td>
                                <td className="column2">Ngưng hoạt động</td>
                                <td className="column4"><Link to="/updateAccount">Cập nhật</Link></td>


                            </tr>
                            <tr>
                                <td className="column1">tuyetnguyen@19</td>

                                <td className="column2">Nguyễn Văn A</td>
                                <td className="column3">0919898273</td>
                                <td className="column2">tuyetnguyen@gmail.com</td>
                                <td className="column2">Kế toán</td>
                                <td className="column2">Hoạt động</td>
                                <td className="column4"><Link to="/updateAccount">Cập nhật</Link></td>


                            </tr>





                        </tbody>
                    </table>
                </div>
            </div>
        )

    }
}

export default TableAccount