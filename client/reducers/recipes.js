const initialState = []

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case 'ADD_RECIPE':
            return [...state, action.recipe]
        default:
            return state
    }
}

export default reducer