import React from 'react'
import { connect } from 'react-redux'
import {saveRecipes} from '../actions/index'

class RecipeForm extends React.Component{

    state = {
        name: ''
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        //USE ANOTHER THUNK FUNCTION HERE
        //SAVES IT TO THE DATABASE THROUGH API
        //THEN DISPATCH REDUX FUNCTION
        const wombat = {name: this.state.name}
        this.props.dispatch(saveRecipes(wombat))

        this.setState({
            name: ''
        })
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