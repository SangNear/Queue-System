import React, { Component } from 'react'
import '../DashBoard/DashBoard.scss'
import { Link } from 'react-router-dom'
import InfoImg from '../../assets/img/info-img.png'
import { BiBell } from "react-icons/bi"
import MenuBar from '../MenuBar/MenuBar'
import OverView from '../OverView/OverView'


class DashBoard extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>


                <div className='dashboard-container'>
                    <div className='header'>
                        <h4>Dashboard</h4>

                        <div className='header-item'>
                            <BiBell className='icon-dashboard' />
                            <img src={InfoImg} className='dashboard-img' />
                            <div className='title-name'>
                                <span>Xin chào<br /></span>
                                <span>Lê huỳnh ái vân</span>
                            </div>
                        </div>
                    </div>
                    <div className='main'>

                        <div className='dashboard'>
                            <h4 className='dashboard-title'>Biểu đồ cấp số</h4>
                            <div className='dashboard-status-list'>
                                <div className='dashboard-status-item'>1</div>
                                <div className='dashboard-status-item'>2</div>
                                <div className='dashboard-status-item'>3</div>
                                <div className='dashboard-status-item'>4</div>
                            </div>

                            <div className='dashboard-chart'>

                            </div>

                        </div>
                        <div className='overview'>
                            <h4 className='overview-title'>Tổng quan</h4>
                            <div className='overview-status-list'>
                                <div className='overview-status-item'>1</div>
                                <div className='overview-status-item'>2</div>
                                <div className='overview-status-item'>3</div>
                            </div>

                            <div className='overview-datetime'>
                                
                            </div>
                        </div>
                    </div>

                </div>



            </React.Fragment>
        )

    }
}

export default DashBoard