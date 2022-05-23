import React, { Component } from 'react'

import loginLogo from "../../assets/img/Logo alta.png"

import '../auth/Login.scss'
import { Link } from 'react-router-dom'
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className='main'>


                <div className='left-side'>
                    <img className='logo-img' src={loginLogo} alt='logo' />
                    <form className='login-form'>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Tên đăng nhập *</label>
                            <input type="email" class="form-control" />

                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Mật khẩu *</label>
                            <input type="password" class="form-control" />
                            <span><i class="fal fa-eye"></i></span>
                            
                        </div>
                        <br></br>
                        <Link to="/forgot" className='forgot-password'>Quên mật khẩu</Link>
                        
                        <br></br>
                        <div className='btn-control'>
                            <button type="submit" class="btn-submit ">Đăng nhập</button>
                        </div>

                    </form>
                </div>
                <div className='right-side'>

                    <div className='text-title-1'>Hệ thống</div>
                    <div className='text-title-2'>QUẢN LÝ XẾP HÀNG</div>
                </div>
                {/* <Container>
    <Row >
        <Col className='left-side'  lg={5}  sm={12}>
            <img className='logo-img' src={loginLogo} alt='logo' />
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

export default Login