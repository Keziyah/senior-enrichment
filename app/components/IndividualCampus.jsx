import React, {Component} from 'react'; 
import deleteCampus from '../reducers'
import {connect} from 'react-redux'

class IndividualCampus extends Component  {
    constructor(props) {
        super(props)

        // this.handleClick = this.handleClick.bind(this)
    }

    // handleClick() {
    //     this.props.deleteCampus(this.props.campus)
    // }

    render() {
    return (
 <div>
     {/*<button onClick={this.handleClick}>Delete Campus</button>*/}
        <h2>
            Students
        </h2>
        <ol>

        </ol>
</div>
    
    )
    }
}

// function mapStateToProps(state) {
//     return {
//         campus: state.campuses.SelectedCampus
//     }
// }

// export default connect(mapStateToProps, {deleteCampus})(IndividualCampus); 

export default IndividualCampus; 