import React, {Component} from 'react'; 
import {addCampus} from '../reducers'; 
import {connect} from 'react-redux'; 

//Here, we want to get the values of the inputs to dispatch them. 
//1. Add the input values to the state as they change with a handleChange
//2. Dispatch the action addStudent using the state as the payload. 

 class AddCampus extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '', 
            address: '', 
            maxEnrollment: ''
        }

        this.handleNameChange = this.handleNameChange.bind(this); 
        this.handleAddressChange = this.handleAddressChange.bind(this); 
        this.handleEnrollmentChange = this.handleEnrollmentChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleNameChange(e) {
        this.setState({name: e.target.value})
    }

     handleAddressChange(e) {
        this.setState({address: e.target.value})
    }

     handleEnrollmentChange(e) {
        this.setState({maxEnrollment: e.target.value})
    }

    handleSubmit() {
       this.props.addCampus(this.state)
       this.setState({name: '', 
            address: '', 
            maxEnrollment: ''})
    }

    render() {
        return (
            <div>
            <h1>{this.props.header}</h1>
            <form onSubmit={this.handleSubmit}>
                <label>Campus Name </label>
                <input type="text" onChange={this.handleNameChange} value={this.state.name} />

                 <label>Address </label>
                <input type="text" onChange={this.handleAddressChange} value={this.state.address}/>

                 <label>Max Enrollment</label>
                <input type="number" onChange={this.handleEnrollmentChange}
                value={this.state.maxEnrollment}/>

                <button type="submit">Submit</button>
            </form>
            </div>
        )
    }
}


export default connect(null, {addCampus})(AddCampus); 
