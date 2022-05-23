import React, { Component } from 'react'

import ResetPasswordLogo from "../../assets/img/Logo alta.png"

import '../auth/ResetPassword.scss'

class ResetPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className='main'>


                <div className='left-side'>
                    <img className='logo-img' src={ResetPasswordLogo} alt='logo' />
                    <form className='resetPassword-form'>
                        <h3>Đặt lại mật khẩu</h3>
                        <i class="far fa-address-card"></i>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Mật khẩu *</label>
                            <input type="password" class="form-control" />

                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Nhập lại mật khẩu *</label>
                            <input type="password" class="form-control" />
                            <i class="fas fa-kiss-beam"></i>
                        </div>
                        <br></br>

                        <div className='btn-control'>
                            <button type="submit" class="btn-submit ">Xác nhận</button>
                        </div>

                    </form>
                </div>
                <div className='right-side'>


                </div>
                {/* <Container>
    <Row >
        <Col className='left-side'  lg={5}  sm={12}>
            <img className='logo-img' src={ResetPasswordLogo} alt='logo' />
            <Form>
                <Form.Group className="mb-3 text-left" controlId="formBasicEmail">
                    <Form.Label>Tên đăng nhập *</Form.Label>
                    <Form.Control type="username" />

                </Form.Group>

                <Form.Group className="mb-3 text-left" controlId="formBasicPassword">
                    <Form.Label className='label-form'>Mật khẩu *</Form.Label>
                    <Form.Control type="password" />
                </Form.Group>
                <Form.Group className="mb-3 text-left">
                    <a href='#' className='forget-password'>Quên mật khẩu?</a>
                </Form.Group>


                <br></br>

                <Button className='btn-submit' variant="primary" type="submit" color='#FF9138'>
                    Đăng nhập
                </Button>
            </Form>
        </Col>

        <Col class="right-side" lg={7} md={6} sm={12}>
            <img className='logo-img' src={group} alt='group' />
            <div className='text-title-1'>Hệ thống</div>
            <div className='text-title-2'>QUẢN LÝ XẾP HÀNG</div>
        </Col>
    </Row>
</Container> */}
            </div>
        )

    }
}

export default ResetPassword