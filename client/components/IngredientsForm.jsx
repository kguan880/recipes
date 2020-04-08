import React from 'react'

class IngredientsForm extends React.Component{

    handleSubmit = (event) =>{
        event.preventDefault()

        console.log('submit')
    }

    handleChange = (event) =>{
        console.log('change')

        console.log(event.target.value)

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Enter Ingredient Here:
                    <input onChange={this.handleChange} type="text" name="ingredient"/>
                </label>

                <input type="submit" value="Submit" onChange={this.handleChange}/>
            </form>
        )
    }
}

export default IngredientsForm