import React, { Component } from 'react'

import ForgotLogo from "../../assets/img/Logo alta.png"

import '../auth/Forgot.scss'
import { Link } from 'react-router-dom'
class Forgot extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className='main'>


                <div className='left-side'>
                    <img className='logo-img' src={ForgotLogo} alt='logo' />
                    
                    <form className='forgot-form'>
                    <h3>Đặt lại mật khẩu</h3>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Vui lòng nhập email để đặt lại mật khẩu của bạn *</label>
                            <input type="email" class="form-control" />

                        </div>
                       
                        
                        <div className='btn-control'>
                        <button  class="btn-cancle ">Hủy</button>
                        <Link to="/reset" class="btn-link"><button  class="btn-submit ">Tiếp tục</button></Link>
                            
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
            <img className='logo-img' src={ForgotLogo} alt='logo' />
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

export default Forgot