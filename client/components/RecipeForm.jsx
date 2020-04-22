import React from 'react'
import {addRecipe} from '../actions/index'
import { connect } from 'react-redux'

class RecipeForm extends React.Component{

    state = {
        name: ''
    }

    handleSubmit = (event) =>{
        event.preventDefault()

        this.props.dispatch(addRecipe(this.state))
        //USE ANOTHER THUNK FUNCTION HERE
        //SAVES IT TO THE DATABASE THROUGH API
        //THEN DISPATCH REDUX FUNCTION
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state.name)

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Enter Recipe Here:
                    <input onChange={this.handleChange} type="text" name="name" value={this.state.name}/>
                </label>

                <input type="submit" value="Submit" onChange={this.handleChange}/>
            </form>
        )
    }
}

export default connect()(RecipeForm)