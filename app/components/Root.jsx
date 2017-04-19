import React, { Component } from 'react';
import {Link} from 'react-router'
import {fetchCampuses} from '../reducers'; 
import { connect } from 'react-redux';
import store from '../store'
import Home from './Home'

 class Root extends Component {
  constructor(props) {
    super(props)
    console.log("PROPS FROM ROOT", this.props)
    let store1 = store.getState(); 
    console.log("STOREE from root", store1)
  }

  //  Before the component mounts, fetch a list of campuses from the db, add them to the store and render them to the children's pages 
    componentWillMount() {
        this.props.fetchCampuses()
        .catch(error => console.error(error))
    }

  render() {

    //console.log("PROPS FROM ROOT222", this.props)
    //Only return the children if the props have loaded.
    if (this.props.campuses.campuses.length === 0) {return (<h1>Loading...</h1>)}
    //console.log(this.props.campuses.campuses)
    else 
    return (
    <div>
    <header>
      Margaret Hamilton Interplanetary Academy of JavaScript
      <Link to="/"><button>Home</button></Link>
      <Link to="/students"><button>Students</button></Link>
    </header>
    {/*{give all this component's children the this.props, including campuses, etc. }*/}
    <div>{React.cloneElement(this.props.children, {...this.props})}</div>
  </div>
    )
}
}

//Get all the campuses from the store so we can put them on this.props. 
function mapStateToProps(state) {
    return {
        campuses: state.campuses
    }
}

//Add the required information from the store to this component's props. 
export default connect(mapStateToProps, {fetchCampuses})(Root); 


