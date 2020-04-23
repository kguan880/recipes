const initialState = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_RECIPE':
            return action.recipes
        case 'DEL_RECIPE':
            return state.filter((recipe) => recipe !== action.recipe)
        default:
            return state
    }
}

export default reducer