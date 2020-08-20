import { AnyAction, combineReducers } from 'redux'
import types from './types'

const initialState = {
    fetching: false
}

const contacts = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case types.Fetch: return {
            ...state,
            fetching: true
        }
        case types.FetchSuccess: return {
            ...state,
            contacts: action.payload.contacts,
            fetching: false
        }
        case types.FetchFailed: return {
            ...state,
            fetching: false
        }
        default: return state
    }
}

const reducer = combineReducers({
    contacts
})

export default reducer