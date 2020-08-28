import { AnyAction, combineReducers } from 'redux'
import types from './types'

const modalC = (state = {
    open: false
}, action: AnyAction) => {
    switch (action.type) {
        case types.OpenC: return {
            contact: action.payload.contact,
            open: true
        }
        case types.Close: return {
            open: false
        }
        default: return state
    }
}

const reducer = combineReducers({
    modalC
})

export default reducer