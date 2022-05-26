import React, { Component } from 'react'
import Info from '../Info/Info'
import MenuBar from '../MenuBar/MenuBar'
import '../Profile/Profile.scss'

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <div className='profile-container'>
                    <MenuBar />
                    <Info />
                </div>

            </React.Fragment>
        )

    }
}

export default Profile