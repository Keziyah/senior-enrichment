import React, { Component } from 'react';
import deleteCampus from '../reducers'
import setCampus from '../reducers'
import { connect } from 'react-redux'

 class IndividualCampus extends Component {
    constructor(props) {
        super(props)
        console.log("PROPS FROM STATE", this.props)
        // console.log("PARAMS", this.props.params)
        // this.handleClick = this.handleClick.bind(this)
        this.renderThis = this.renderThis.bind(this)
    }

    // handleClick() {
    //     this.props.deleteCampus(this.props.campus)
    // }

    // componentWillMount() {
    //     // this.props.setCampus(this.props.params.id)
    //     //console.log("HIHIHIHIHIHI")
    // }

    renderThis() {
        return (
                <div>
                    {/*<button onClick={this.handleClick}>Delete Campus</button>*/}
                    <h1>You have reached {this.props.data.name}</h1>
                    <h2>
                        Students
                    </h2>
                    <ol>

                    </ol>
                </div>
            )
    }

    render() {
        const currentCampus = this.props.data

        console.log("PROPS FROM STATE2", this.props.data)
        if (!currentCampus) return (<h1>Loading...</h1>)
        else
        return this.renderThis()
            // /*return (
            //     <div>
            //         {/*<button onClick={this.handleClick}>Delete Campus</button>*/}
            //         <h1>You have reached {}</h1>
            //         <h2>
            //             Students
            //         </h2>
            //         <ol>

            //         </ol>
            //     </div>

            // )*/
    }
}

function mapStateToProps(state) {
    return {
        data: state.campuses.SelectedCampus.data
    }
}

export default connect(mapStateToProps, {setCampus})(IndividualCampus); 

//export default IndividualCampus; 

//Here, I am trying to get the selected campus to appear in this component as a prop. 
//It seems to be coming in after the props is loaded. 

//According to stack overflow I need to use a container component to separate data
//from rendering. 

//http://stackoverflow.com/questions/33131542/how-can-i-prevent-a-component-from-rendering-before-data-is-loaded

//I could also use an onEnter function in the routes to dispatch the relevant action.

//Since I have the route param of id (this.props.params), I am putting that in a lifecycle method to load the data before the component mounts.  

//SOLUTION:

//1)Put a conditional in the render to render Loading if the props havent loaded, 
//or a function if they have loaded. 

//2)In this seperate function, I can use the props I need, like the campus name. 
//If I use them only in the render, they will not be loaded when I need them, and
//it will cause an error. 

//3)Here, I am still getting my props straight from the store through connect. 
//It is possible to get them from the root, but I wasn't able to make that work. 

//4) The root is running fetch campuses:  get all the campuses on the state when you 
//access anywhere on the site. 

//5) The HOme is running setCampus: set the currently selected campus on the state
//whenever someone clicks on it. 
    //However, this does not work if someone goes directly to the url without 
    //clicking from the homepage. 