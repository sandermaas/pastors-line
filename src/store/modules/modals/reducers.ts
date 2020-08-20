import { AnyAction, combineReducers } from 'redux'
import types from './types'

const modalA = (state = false, action: AnyAction) => {
    switch (action.type) {
        case types.OpenA: return true
        case types.OpenB: return false
        case types.Close: return false
        default: return state
    }
}

const modalB = (state = false, action: AnyAction) => {
    switch (action.type) {
        case types.OpenA: return false
        case types.OpenB: return true
        case types.Close: return false
        default: return state
    }
}

const reducer = combineReducers({
    modalA,
    modalB
})

export default reducer