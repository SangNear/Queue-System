
import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
class DatePickerComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: ''

        }
    }

    render() {
        return (
            
                <DatePicker
                    selected={this.state.startDate}
                    onChange={date => this.setState(date)}
                />
            
        )

    }
}

export default DatePickerComponent