import React from 'react'

class RecipeFrom extends React.Component{

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
                    Enter Recipe Here:
                    <input onChange={this.handleChange} type="text" name="recipe"/>
                </label>

                <input type="submit" value="Submit" onChange={this.handleChange}/>
            </form>
        )
    }
}

export default RecipeFrom