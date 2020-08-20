import { AnyAction, combineReducers } from 'redux'
import types from './types'

const initialState = {
    data: {
        contacts: {},
        contacts_ids: [],
        total: 0
    },
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
            data: {
                contacts: {
                    ...state.data.contacts,
                    ...action.payload.data.contacts
                },
                contacts_ids: state.data.contacts_ids.concat(action.payload.data.contacts_ids),
                total: action.payload.data.total
            },
            fetching: false
        }
        case types.FetchFailed: return {
            ...state,
            fetching: false
        }
        case types.ResetPage: return state = initialState
        default: return state
    }
}

const page = (state = 1, action: AnyAction) => {
    switch (action.type) {
        case types.IncreasePage: return state = state + 1
        case types.ResetPage: return state = 1
        default: return state
    }
}

const reducer = combineReducers({
    contacts,
    page
})

export default reducer