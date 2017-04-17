import React, {Component} from 'react'; 
import {addStudent} from '../reducers'; 
import {connect} from 'react-redux'; 

//Here, we want to get the values of the inputs to dispatch them. 
//1. Add the input values to the state as they change with a handleChange
//2. Dispatch the action addStudent using the state as the payload. 

 class AddStudent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            first: '', 
            last: '', 
            email: '', 
            campus: ''
        }

        this.handleCampusChange = this.handleCampusChange.bind(this); 
        this.handleEmailChange = this.handleEmailChange.bind(this); 
        this.handleLastChange = this.handleLastChange.bind(this); 
        this.handleFirstChange = this.handleFirstChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleFirstChange(e) {
        this.setState({first: e.target.value})
    }

     handleLastChange(e) {
        this.setState({last: e.target.value})
    }

     handleEmailChange(e) {
        this.setState({email: e.target.value})
    }

     handleCampusChange(e) {
        this.setState({campus: e.target.value})
    }

    handleSubmit() {
       this.props.addStudent(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>{this.props.header}</h2>

                <label>First </label>
                <input type="text" onChange={this.handleFirstChange} />

                 <label>Last </label>
                <input type="text" onChange={this.handleLastChange}/>

                 <label>Email</label>
                <input type="text" onChange={this.handleEmailChange}/>

                 <label>Campus</label>
                <input type="text" onChange={this.handleCampusChange}/>

                <button type="submit">Submit</button>
            </form>
        )
    }
}


export default connect(null, {addStudent})(AddStudent); 



