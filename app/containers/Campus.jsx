import React, { Component } from 'react';
import deleteCampus from '../reducers'
//import IndividualCampus from '../components/IndividualCampus'
import { connect } from 'react-redux';


class Campus extends Component {
    //currently selected campus on state 
    //put the campus name in the h1
    //map through the students' names under the h2. 

    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                You have reached {this.props.name}
                <div>
                    {/*<button onClick={this.handleClick}>Delete Campus</button>*/}
                    <h2>
                        Students
                    </h2>
                    <ol>

                    </ol>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        name: state.campuses.SelectedCampus
    }
}

export default connect(mapStateToProps)(Campus)
