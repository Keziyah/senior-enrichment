import React, { Component } from 'react';
import {Link} from 'react-router'; 
import { connect } from 'react-redux';
import {setCampus, fetchCampuses} from '../reducers'; 
import AddCampus from '../containers/AddCampus'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {toggleAddCampus: false}
        this.handleClick = this.handleClick.bind(this)
        this.addButton = this.addButton.bind(this)
    }

    //Before the component mounts, fetch a list of campuses from the db, add them to the store and render them to the page. 
    componentWillMount() {
        this.props.fetchCampuses()
        .catch(error => console.error(error))
    }

    //When someone clicks, get the text of the current thing they clicked. 
    //Which is the campus name. Then send the current name to the store.
    //So that on the campus page, we can only show relevant info to that campus. 
    handleClick(e) {
       this.props.setCampus(e.currentTarget.id)
    //    .catch(error => console.error(error))
    //     console.log("clicked", e.currentTarget.id)
    }

//Show or hide the add campus form depending on whether or not someone has clicked
//this button. 
    addButton() {
        this.setState({toggleAddCampus: true})
    }

    render() {
    return (
        <div>
                <button onClick={this.addButton}>Add New Campus</button>

                {
                    this.state.toggleAddCampus ? <AddCampus header="Add New Campus" /> : null 
                }

            {
                this.props.campuses.campuses.map(campus => {
                    console.log(campus)
                    return (
                        <div key={campus.id} >
                         <Link key={campus.id} id={campus.id} onClick={this.handleClick} to={`/campus/${campus.id}`}><h1 key={campus.id}>{campus.name}</h1></Link>
                         </div>
                    )
                })
            }

        </div>
    )
    }
}


//Get all the campuses from the store so we can render them here. 
function mapStateToProps(state) {
    return {
        campuses: state.campuses
    }
}

//Add the required information from the store to this component's props. 
export default connect(mapStateToProps, {setCampus, fetchCampuses})(Home); 