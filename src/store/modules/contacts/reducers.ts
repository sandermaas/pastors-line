import { AnyAction, combineReducers } from 'redux'
import types from './types'

const initialContactsState = {
    data: {
        contacts: {},
        contacts_ids: [],
        total: 0
    },
    fetching: false
}

const contacts = (state = initialContactsState, action: AnyAction) => {
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
        case types.ResetState: return state = initialContactsState
        default: return state
    }
}

const params = (state = { page: 1 }, action: AnyAction) => {
    switch (action.type) {
        case types.UpdateParams: return {
            ...state,
            ...action.payload.params
        }
        default: return state
    }
}

const reducer = combineReducers({
    contacts,
    params
})

export default reducer