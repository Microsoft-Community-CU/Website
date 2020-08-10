import {
    TOGGLE_DRAWER
} from '../action.type'

const initialState = {
    drawer: false
}


export default (state = initialState, action) => {
    switch (action.type) {

        case TOGGLE_DRAWER:
            return {
                ...state,
                drawer: !state.drawer
            }

        default:
            return state
    }
}