import React, {Component} from 'react'; 
import AddStudent from './AddStudent'

//See an individual student's name, email, campus, and ID#
//Change any of the student's details. 

//Here, I am using the AddStudent component as a way to edit the student. 

class IndividualStudent extends Component {
    constructor() {
        super()

        this.state = {toggleEdit: false}

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({toggleEdit: true})
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                   <tr>
                       <th><h2>ID</h2></th>
                       <th><h2>First</h2></th>
                       <th><h2>Last</h2></th>
                       <th><h2>Email</h2></th>
                       <th><h2>Campus</h2></th>
                   </tr>
                   <tr>
                       <td>012</td>
                       <td>Keziyah</td>
                       <td>Lewis</td>
                   </tr>
                   </tbody>
                </table>

                <button onClick={this.handleClick}>Edit Student</button>

                {
                    this.state.toggleEdit ? <AddStudent header={"Edit This Student"} /> : null
                }
            </div>
        )
    }
}

export default IndividualStudent