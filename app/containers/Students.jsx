import React, {Component} from 'react'; 
import {Link} from 'react-router'; 
import AddStudent from './AddStudent'

export default class Students extends Component {
    constructor() {
        super()

        this.state = {toggleAdd: false}

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({toggleAdd: true})
    }

    render() {
        return (
        <div>
            <button onClick={this.handleClick}>Add new student</button>

            {
                this.state.toggleAdd ? <AddStudent header={"Add New Student"}/> : null
            }
            <div>
            <h1>All Students: </h1>
            </div>
        </div>
        )
    }
}